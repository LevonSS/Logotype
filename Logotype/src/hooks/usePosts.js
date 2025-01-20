import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../utils/constants";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("");

        const data = await res.json();
        setPosts(data);
        setError("");
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts, isLoading, error };
}
