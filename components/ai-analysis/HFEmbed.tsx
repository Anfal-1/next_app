'use client'

export default function HFEmbed() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-[#5C4033]">
          تحليل الأشجار بالذكاء الاصطناعي
        </h2>
        <p className="text-gray-600 mb-8">
          استخدم أداة MaskFormer لتحديد الأشجار من صور الأقمار الصناعية مباشرة
          عبر الموقع.
        </p>
        <div className="w-full h-[700px]">
          <iframe
            src="https://huggingface.co/spaces/thiagohersan/maskformer-satellite-trees-gradio"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allow="clipboard-write; clipboard-read; camera; microphone"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
