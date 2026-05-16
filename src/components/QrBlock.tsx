import Image from "next/image";

export function QrBlock() {
  return (
    <div className="qr-card">
      <p className="eyebrow">Instagram</p>
      <h3>@svadebnyeplatya.by</h3>
      <p>
        Сканируйте QR-код, чтобы перейти в наш Instagram — там работы,
        детали пошива и актуальные образы.
      </p>
      <Image
        src="/qr-instagram.jpg"
        alt="QR-код Instagram BADLEN"
        width={260}
        height={260}
        sizes="180px"
        style={{ borderRadius: 12 }}
      />
    </div>
  );
}
