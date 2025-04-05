export const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    width: "200px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
