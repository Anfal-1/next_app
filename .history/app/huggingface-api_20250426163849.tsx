export async function predictTreeMask(imageFile: File) {
  const apiKey = process.env.HUGGINGFACE_TOKEN // لاحظ أن الاسم هنا مطابق لـ .env.local
  const modelUrl =
    'https://api-inference.huggingface.co/models/thiagohersan/maskformer-satellite-trees-gradio'

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
      Authorization: `Bearer ${apiKey}`, // هنا صححنا كتابة Bearer
    },
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch prediction: ${response.statusText}`)
  }

  const blob = await response.blob()
  return URL.createObjectURL(blob) // يعطيك رابط مباشر للصورة الناتجة
}
