import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getUserDetails } from "../api-helpers/helpers";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import DiaryItem from "../components/DiaryItem";

interface User {
  _id: string;
  name: string;
  email: string;
  posts: Post[];
}

interface Post {
  _id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  location: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserDetails()
      .then((data) => {
        if (data) {
          setUser(data.user);
        } else {
          console.error("No user data received");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <Box display="flex" flexDirection={"column"}>
      {user && (
        <>
          <Typography
            textAlign={"center"}
            variant="h3"
            fontFamily={"quicksand"}
            padding={2}
          >
            User Profile
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
            Name: {user.name}
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
            Email: {user.email}
          </Typography>
          <Button
            onClick={handleClick}
            sx={{ mr: "auto", width: "15%" }}
            color="warning"
            variant="contained"
          >
            Logout
          </Button>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            {user.posts && user.posts.length > 0 ? (
              user.posts.map((post, index) => (
                <DiaryItem
                  key={index}
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  id={post._id}
                  image={post.image}
                  location={post.location}
                  user={user._id}
                  name={user.name}
                />
              ))
            ) : (
              <Typography
                fontFamily={"quicksand"}
                padding={1}
                textAlign="center"
              >
                No posts yet.
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Profile;
