import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="container3 profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileTop">
                        <div className="profileCover">
                            <img src="assets/post/1.jpg" alt="" className="profileCoverImg" />
                            <img src="assets/person/1.png" alt="" className="profileUserImg" />
                        </div>
                        <div className="container2 profileInfo">
                            <h4 className="profileInfoName">My Name</h4>
                            <span className="profileInfoDesc">My Desc</span>
                        </div>
                    </div>
                    <div className="container3 profileBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}
