export const saveSession = (data) => {
  localStorage.setItem("authToken", data.token);
  localStorage.setItem("id", data.id);
  localStorage.setItem("email", data.email);
  localStorage.setItem("userType", data.user_type);
  localStorage.setItem("code", data.code);
};

export const getSession = () => {
  return {
    authToken: localStorage.getItem("authToken"),
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
    userType: localStorage.getItem("userType"),
    code: localStorage.getItem("code"),
  };
};

export const clearSession = () => {
  localStorage.clear();
};

// "homepage": "https://gimmie.ai/web",

export const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span
            key={`full-${index}`}
            style={{
              color: "#FFDF00",
              fontSize: "20px",
            }}
          >
            &#9733;
          </span>
        ))}
      {halfStar === 1 && <span style={{ fontSize: "20px" }}>&#9734;</span>}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={`empty-${index}`} style={{ fontSize: "20px" }}>
            &#9734;
          </span>
        ))}
    </>
  );
};
