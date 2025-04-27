export async function predictTreeMask(
  imageFile: File,
  taskType: 'tree-density' | 'desertification'
) {
  const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN // تأكد أن اسم المتغير في .env.local فيه NEXT_PUBLIC_

  // نحدد رابط النموذج حسب المهمة المطلوبة
  let modelUrl = ''

  if (taskType === 'tree-density') {
    modelUrl =
      'https://api-inference.huggingface.co/models/thiagohersan/maskformer-satellite-trees-gradio'
  } else if (taskType === 'desertification') {
    modelUrl =
      'https://api-inference.huggingface.co/models/your-desertification-model' // هنا تحط رابط نموذج التصحر لو عندك
  } else {
    throw new Error('Unsupported task type.')
  }

  if (!apiKey) {
    throw new Error(
      'Missing Hugging Face API token. Please check your .env.local file.'
    )
  }

  const formData = new FormData()
  formData.append('file', imageFile)

  const response = await fetch(modelUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`, // هنا صحيح استخدام الـ Bearer مع `
    },
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch prediction: ${response.statusText}`)
  }

  const blob = await response.blob()
  return URL.createObjectURL(blob) // يرجع رابط الصورة المعالجة
}
