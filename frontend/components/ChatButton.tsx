export default function ChatButton() {
  return (
    <a
      href="https://t.me/ТВОЙ_ТЕЛЕГРАМ_ЮЗЕРНЕЙМ_ИЛИ_БОТ"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#0088cc",
        color: "white",
        padding: "12px 18px",
        borderRadius: "30px",
        fontWeight: "bold",
        textDecoration: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      Связаться с оператором
    </a>
  );
}

