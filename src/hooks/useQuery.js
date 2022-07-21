import { useEffect, useState } from "react";
// take in the url
function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  // rename `posts` to a more generic `data`
  const [data, setData] = useState(null);
  const [posts] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      });
  }, [url]);
  // the url is now a dependency
  // we want to use the side effect whenever the url changes

  // return an *object* with the data and isLoaded state
  return { data, isLoaded };
  return { posts, isLoaded };
}

export default useQuery;