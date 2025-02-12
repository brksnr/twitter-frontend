import React, { useEffect, useState } from "react";
import { deleteLike, deleteReTweet, deleteTweet, getAllTweets, likeTweet, reTweet, updateTweet } from "../api";
import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";
import { getTweets } from "../actions/tweetActions";
import { useHistory } from "react-router-dom";

export function Posts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tweets = useSelector(state => state.tweets.tweets);
  const dispatch = useDispatch();
  const userId = localStorage.getItem('id');
  const userEmail = localStorage.getItem('email');
  const history = useHistory();
  const [editingTweet, setEditingTweet] = useState(null);
  const [newTweetContent, setNewTweetContent] = useState("");

  const getGravatarUrl = (email) => {
    const emailHash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
  };

  /* LISTED TWITS */
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

  /* LİKE / DİSKLE */
  const handleLike = async (tweet) => {
    try {
      const tweetId = tweet.id; 

      if (isLikedByUser(tweet)) {
        await deleteLike(tweetId, userId);  
        console.log(`Tweet ${tweetId} unliked by user ${userId}`);
      } else {
        await likeTweet(tweetId, userId); 
        console.log(`Tweet ${tweetId} liked by user ${userId}`);
      }

      setLoading(true); 
      const data = await getAllTweets(); 
      dispatch(getTweets(data)); 
      setLoading(false);
    } catch (err) {
      console.error("Error handling like/dislike", err);
    }
  };

  const isLikedByUser = (tweet) => {
    return tweet.likes.includes(localStorage.getItem('email'));
  };
  /* LİKE / DİSKLE */

  /* retweet */
  const handleReTweet = async (tweet) => {
    try {
      const tweetId = tweet.id;
      if (isRetweetedByUser(tweet)) {
        await deleteReTweet(tweetId, userId);  
        console.log(`Tweet ${tweetId} unretweeted by user ${userId}`);
      } else {
        await reTweet(tweetId, userId);
        console.log(`Tweet ${tweetId} retweeted by user ${userId}`);
      }
      setLoading(true); 
      const data = await getAllTweets(); 
      dispatch(getTweets(data)); 
      setLoading(false); 
    } catch (err) {
      console.error("Error handling retweet", err);
    }
  };

  const isRetweetedByUser = (tweet) => {
    return tweet.retweets.includes(localStorage.getItem('email')); 
  };
  /* retweet */

  /* GO DETAILS */
  const handleTweetClick = (tweetId) => {
    history.push(`/tweet/${tweetId}`);
  };
  /* GO DETAILS */

  /* DELETE TWEET */
  const handleDeleteTweet = async (tweetId) => {
    try {
      await deleteTweet(tweetId, userId);
      setLoading(true);
      const data = await getAllTweets();
      dispatch(getTweets(data)); 
      setLoading(false); 
      console.log(`Tweet ${tweetId} deleted`);
    } catch (err) {
      console.error("Error deleting tweet", err);
    }
  };
  /* DELETE TWEET */

  /* TWEET EDIT */
  const handleEditTweet = (tweet) => {
    setEditingTweet(tweet);
    setNewTweetContent(tweet.content); 
  };

  const handleUpdateTweet = async () => {
    try {
      const tweetData = { content: newTweetContent };
      await updateTweet(userId, editingTweet.id, tweetData);  
      setEditingTweet(null); 
      setNewTweetContent("");
      window.location.reload();
    } catch (err) {
      console.error("Tweet güncellenirken hata oluştu", err);
    }
  };
  /* TWEET EDIT */


  return (
    <>
    {editingTweet && (
  <div 
    className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50 text-white"
    onClick={() => setEditingTweet(null)}
  >
    <div 
      className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg" 
      onClick={(e) => e.stopPropagation()} 
    >
      <h2 className="text-2xl font-bold mb-4">Tweet'i Düzenle</h2>
      <textarea
        value={newTweetContent}
        onChange={(e) => setNewTweetContent(e.target.value)}
        className="w-full h-32 p-3 border border-gray-800 bg-gray-700 rounded-md mb-4 resize-none"
      />
      <div className="flex justify-end gap-4">
        <button 
          onClick={handleUpdateTweet} 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Tweet'i Güncelle
        </button>
        <button 
          onClick={() => setEditingTweet(null)} 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          İptal
        </button>
      </div>
    </div>
  </div>
)}

      {[...tweets].reverse().map((tweet) => (
        <button 
          key={tweet.id} 
          className="flex border-b border-gray-700 pb-3 hover:bg-gray-800"
          onClick={() => handleTweetClick(tweet.id)}
        >
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
                <p>.</p>
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
                <button
                  className={`hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center ${isRetweetedByUser(tweet) ? 'text-green-500' : 'text-darkgray'}`}
                  onClick={() => handleReTweet(tweet)}
                >
                  <i className="fa-solid fa-retweet"></i>
                </button>
                <p>{tweet.retweets.length}</p>
              </div>
              <div className="flex items-center">
                <button
                  className={`hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center ${isLikedByUser(tweet) ? 'text-red-500' : 'text-darkgray'}`}
                  onClick={() => handleLike(tweet)}
                >
                  <i className="fa-solid fa-heart"></i>
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
              {tweet.user.email === userEmail && (
                <button 
                  className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"
                  onClick={() => handleEditTweet(tweet)}
                  >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              )}
              
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </button>
                {tweet.user.email === userEmail && (
                  <button 
                    className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"
                    onClick={() => handleDeleteTweet(tweet.id)}
                  >
                    <i className="fa-solid fa-trash-can text-red-800"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </button>
      ))}
              
    </>
  );
}
