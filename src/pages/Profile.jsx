import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const [searchQuery] = useSearchParams();
  const userName = searchQuery.get("user");
  const color = searchQuery.get("color");
  const queryParams = Object.fromEntries(searchQuery.entries());

  console.log("searchQuery name: ", searchQuery.get("user"));
  console.log("searchQuery color: ", searchQuery.get("color"));
  console.log("searchQuery queryParams: ", queryParams);

  return (
    <div>
      {userName && color ? (
        <p>
          Hello {userName}, Your fav color is
          <strong style={{ color }}>{color}</strong>
        </p>
      ) : (
        <p>Hello user, what is your fav color?</p>
      )}
    </div>
  );
};

export default Profile;
