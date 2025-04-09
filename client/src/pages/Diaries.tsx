import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getAllPosts, PostResponse } from "../api-helpers/helpers";
import DiaryItem from "../components/DiaryItem";

const Diaries: React.FC = () => {
  const [posts, setPosts] = useState<PostResponse[] | null>(null);

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        if (data) {
          setPosts(data);
        } else {
          console.error("No data received from getAllPosts");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={3}
      justifyContent="center"
      alignItems="center"
    >
      {posts && posts.length > 0 ? (
        posts.map((item, index) => (
          <DiaryItem
            key={index}
            id={item._id}
            title={item.title}
            description={item.description}
            image={item.image}
            location={item.location}
            date={new Date(item.date).toLocaleDateString()}
            user={item.user._id}
            name={item.user.name}
          />
        ))
      ) : (
        <p>No diaries available</p>
      )}
    </Box>
  );
};

export default Diaries;
