export async function predictTreeMask(imageFile: File) {
    const apiKey = "هنا تحط توكن Hugging Face";
    const modelUrl = "https://api-inference.huggingface.co/models/thiagohersan/maskformer-satellite-trees-gradio";
  
    const formData = new FormData();
    formData.append("file", imageFile);
  
    const response = await fetch(modelUrl, {
      method: "POST",
      headers: {
        Authorization: Bearer ${apiKey}
      },
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prediction: ${response.statusText}`);
    }
  
    const blob = await response.blob();
    return URL.createObjectURL(blob); // يرجع رابط مباشر للصورة الجديدة
  }