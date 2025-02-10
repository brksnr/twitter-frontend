import React, { useEffect, useState } from "react";
import { getAllTweets } from "../api";
import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";
import { getTweets } from "../actions/tweetActions";

export function Posts() {
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const tweets = useSelector(state => state.tweets.tweets);
  const dispatch = useDispatch();
  console.log(tweets);

  const getGravatarUrl = (email) => {
    const emailHash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
  };
  
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const data = await getAllTweets(); 
        dispatch(getTweets(data));
        console.log(data);
      } catch (err) {
        setError("Error fetching tweets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {tweets.map((tweet) => (
        <button key={tweet.id} className="flex border-b border-gray-700 pb-3 hover:bg-gray-800">
          <div className="pl-3 pt-4">
            <img
              src={getGravatarUrl(tweet.user.email)}
              className="w-10 h-9 rounded-full"
              alt="profile"
            />
          </div>
          <div className="w-full pt-5 pl-2 flex flex-col gap-10 pr-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                <p className="font-bold text-sm">{tweet.user.email}</p>
                <p className="text-sm text-darkgray">{tweet.user.username}</p>
                <point>.</point>
                <p className="text-sm text-darkgray">{tweet.timestamp}</p>
              </div>
              <div>
                <button>
                  <i className="text-darkgray fa-solid fa-ellipsis hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"></i>
                </button>
              </div>
            </div>
            <div className="text-start">
              <p>{tweet.content}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-regular fa-comment"></i>
                </button>
                <p>{tweet.comments.length}</p> 
              </div>
              <div className="flex items-center">
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-retweet"></i>
                </button>
                <p>{tweet.retweets.length}</p> 
              </div>
              <div className="flex items-center">
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                <i class="fa-regular fa-heart"></i>
                </button>
                <p>{tweet.likes.length}</p> 
              </div>
              <div className="flex items-center">
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-chart-column"></i>
                </button>
                <p>27B</p> 
              </div>
              <div className="flex gap-3">
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </button>
              </div>
            </div>
          </div>
        </button>
      ))}
    </>
  );
}
