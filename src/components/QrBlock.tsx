import Image from "next/image";

export function QrBlock() {
  return (
    <div className="qr-card qr-story-card">
      <div className="qr-story-top">
        <p className="eyebrow">Instagram</p>
        <h3>@svadebnyeplatya.by</h3>
        <p className="qr-story-desc">
          Работы, детали пошива и актуальные образы — в нашем Instagram.
        </p>
      </div>
      <div className="qr-story-img-wrap">
        <Image
          src="/qr-instagram.jpg"
          alt="QR-код Instagram BADLEN"
          width={220}
          height={220}
          sizes="220px"
          style={{ borderRadius: 10 }}
        />
      </div>
      <p className="qr-story-hint">Наведите камеру на код</p>
    </div>
  );
}
