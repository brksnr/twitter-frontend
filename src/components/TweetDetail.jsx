import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Aside } from "./Aside";
import { Rightside } from "./Rightside";
import { useEffect, useState } from "react";
import { commentToTweet, deleteComment, tweetDetail, updateComment } from "../api";
import md5 from "md5";

export function TweetDetail(){
    const { tweetId } = useParams();
    const [tweet, setTweet] = useState(null);
    const [comment, setComment] = useState("");
    const userId = localStorage.getItem("id"); 
    const userEmail = localStorage.getItem('email');
    const [editingComment, setEditingComment] = useState(null);
    const [newCommentContent, setNewCommentContent] = useState("");

      const handleEditComment = (comment) => {
        setEditingComment(comment);
        setNewCommentContent(comment.comment);
      };      

      const handleUpdateComment = async () => {
        try {
            const tweetData = { comment: newCommentContent };
            await updateComment(userId, tweetId, editingComment.id, tweetData);  
            setEditingComment(null); 
            setNewCommentContent(""); 
            window.location.reload();
        } catch (err) {
            console.error("Tweet güncellenirken hata oluştu", err);
        }
    };

    const handleDeleteComment = async (commentId, tweetId) => {
      try {
          await deleteComment(userId, tweetId, commentId); 
          window.location.reload();
      } catch (err) {
          console.error("Yorum silinirken hata oluştu:", err);
      }
  };
  

    const getGravatarUrl = (email) => {
            const emailHash = md5(email.trim().toLowerCase());
            return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
          };


    useEffect(() => {
        const fetchTweet = async () => {
          try {
            const data = await tweetDetail(tweetId);
            setTweet(data);
          } catch (error) {
            console.error("Tweet fetch error:", error);
          }
        };
    
        fetchTweet();
      }, [tweetId]);

      const handleCommentSubmit = async () => {
        if (!comment.trim()) return;
        try {
          const response = await commentToTweet(tweetId, userId, { comment });
          setTweet((prev) => ({
            ...prev,
            comments: [...prev.comments, response],
          }));
          setComment("");
          window.location.reload();
        } catch (error) {
          console.error("Yorum ekleme hatası:", error);
        }
      };

    const handleGoBack = () => {
        window.history.back();
    }

    return (
        <>
        {editingComment && (
  <div 
    className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50 text-white"
    onClick={() => setEditingComment(null)} 
  >
    <div 
      className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg" 
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold mb-4">Yorumu Düzenle</h2>
      <textarea
        value={newCommentContent} 
        onChange={(e) => setNewCommentContent(e.target.value)}  
        className="w-full h-32 p-3 border border-gray-800 bg-gray-700 rounded-md mb-4 resize-none"
      />
      <div className="flex justify-end gap-4">
        <button 
          onClick={handleUpdateComment} 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Güncelle
        </button>
        <button 
          onClick={() => setEditingComment(null)}  
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          İptal
        </button>
      </div>
    </div>
  </div>
)}
        <div className="flex bg-black">
        <Aside/>
        <div className="border border-gray-700 sm:w-middle flex flex-col text-white bg-black">
            {/* GÖNDERİ */}
            <button className="text-left flex items-center gap-5 pl-5 h-16">
                <i onClick={handleGoBack} className="fa-solid fa-arrow-left hover:bg-gray-700 rounded-full w-10 h-10 items-center justify-center flex"></i>
                <p className="font-bold text-xl">Gönderi</p>
            </button>

            {/* TWEET */}
        <div className="pl-5 pr-5">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img 
                        src={getGravatarUrl(tweet?.user?.email || "")} className="h-10 w-10 rounded-full"></img>
                        <div>
                            <p className="font-bold text-sm">{tweet?.user?.email || ""}</p>
                            <p className="text-sm text-darkgray">@{tweet?.user?.username || ""}</p>
                        </div>
                    </div>
                    <div>
                       <button className="hover:bg-gray-700 rounded-full w-10 h-10 items-center justify-center flex">
                        <i className="fa-solid fa-ellipsis"></i></button>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="w-full">
                    {tweet ? tweet.content : "Tweet Yükleniyor!"}
                    </p>

                    <p className="py-5 text-darkgray">{tweet ? tweet.createdAt : "Tweet Yükleniyor!"}</p>
                </div>

                <div className="border-b border-t border-gray-700 flex justify-between text-xl py-3 text-darkgray">
                <button className="flex gap-1">
                  <i className="fa-regular fa-comment hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"></i>
                  {tweet ? tweet.comments.length : "Tweet Yükleniyor!"}
                </button>
                <button className="flex gap-1">
                    <i className="fa-solid fa-retweet hover:bg-green-500 w-7 h-7 rounded-full flex justify-center items-center"></i>
                    {tweet ? tweet.retweets.length : "Tweet Yükleniyor!"}
                </button>
                <button className="flex gap-1">
                    <i className="fa-solid fa-heart hover:bg-red-500 w-7 h-7 rounded-full flex justify-center items-center"></i>
                    {tweet ? tweet.likes.length : "Tweet Yükleniyor!"}
                </button>
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-chart-column"></i>
                </button>
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
                </div>

                <div className="flex items-center py-5 gap-2">
                    <img 
                    src={getGravatarUrl(userEmail)} className="h-10 w-14 rounded-full"></img>
                    <div className="w-full">
                        <textarea
                        placeholder="Neler Oluyor"
                        className="max-h-20 min-h-20 w-full bg-black px-3 pt-5 text-xl resize-none"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button 
                    onClick={handleCommentSubmit}
                    className="bg-white text-black rounded-full w-24 h-10">
                        Yanıtla
                    </button>
                </div>
        </div>

        {/* YORUMLAR */}

            {tweet ? [...tweet.comments].reverse().map((comment) => (
                <div key={comment.id} className="flex border-b border-t border-gray-700 pb-3 hover:bg-gray-800">
                    <div className="pl-3 pt-4">
                     <img 
                     src={getGravatarUrl(comment.user?.email)}
                     className="w-10 h-9 rounded-full" alt="profile" />
                    </div>
            <div className="w-full pt-5 pl-2 flex flex-col gap-2 pr-2">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-sm">{comment.user?.email || "Bilinmeyen Kullanıcı"}</p>
                  <p className="text-sm text-darkgray">@{comment.user?.username || "Bilinmeyen Kullanıcı"}</p>
              </div>
             <div>
                  <button>
                   <i className="text-darkgray fa-solid fa-ellipsis hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"></i>
               </button>
              </div>
             </div>
              <div className="text-start">
                <p>{comment.comment}</p>
           </div>
              <div className="flex justify-between">
                <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center">
                <i className="fa-regular fa-comment"></i>
                </button>
               <button className="hover:bg-green-500 w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-retweet"></i>
             </button>
                <button className="hover:bg-red-500 w-7 h-7 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-heart"></i>
             </button>
             {comment.user.email === userEmail && (
              <button 
                className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"
                onClick={() => handleEditComment(comment)} 
                >
                <i className="fa-regular fa-pen-to-square"></i>
                </button>
              )}

{comment.user.email === userEmail && (
    <button 
        className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"
        onClick={() => handleDeleteComment(comment.id, tweetId)}
        
    >
        <i className="fa-solid fa-trash-can text-red-800"></i>
    </button>
)}
            </div>
          </div>
         </div>
        )) : "Yükleniyor"}    
        </div>
        <Rightside/>
        </div>
        </>
    )
}
