import Profile from "./Profile";

const list = [
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
  {
    label: "User",
    image:
      "https://png.pngitem.com/pimgs/s/111-1114675_user-login-person-man-enter-person-login-icon.png",
  },
];

const Main = () => {
  const _renderList = () => {
    return list.map((item, index) => {
      return <Profile key={index} label={item.label} image={item.image} />;
    });
  };
  return (
    <>
      <div
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {_renderList()}
      </div>
    </>
  );
};

export default Main;
