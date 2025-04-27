'use client'

export default function TestConnectionButton() {
  async function testConnection() {
    try {
      const res = await fetch(
        'https://api-inference.huggingface.co/models/thiagohersan/maskformer-satellite-trees-gradio'
      )
      if (res.ok) {
        console.log('✅ الاتصال ناجح!')
      } else {
        console.error('❌ الاتصال فشل!', res.statusText)
      }
    } catch (error) {
      console.error('❌ فشل الاتصال كلياً:', error)
    }
  }

  return (
    <button
      onClick={testConnection}
      style={{ padding: 10, background: 'green', color: 'white' }}
    >
      اختبار الاتصال مع Hugging Face
    </button>
  )
}
