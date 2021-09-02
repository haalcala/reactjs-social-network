import { Users } from "../../dummyData";
import "./rightbar.css";

export default function Rightbar({ profile }: { profile?: boolean }) {
    const HomeRightbar = () => (
        <>
            <div className="container2">
                <img src="assets/birthday.png" alt="" className="icon40" />
                <span className="birthdayText">
                    <b>Bitcoin</b> and <b>3 other friends</b> have birthdays
                </span>
            </div>
            <img src="assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle" style={{ marginBottom: "10px" }}>
                Online Friends
            </h4>
            <ul className="onlineFriendList">
                {Users.map(({ id, profilePicture, username }) => (
                    <li key={id} className="container2 onlineFriendListItem">
                        <div className="rightbarProfileImageContainer">
                            <img src={profilePicture} alt="" className="profileImage rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <div className="rightbarUsername">{username}</div>
                    </li>
                ))}
            </ul>
        </>
    );

    const ProfileRightbar = () => (
        <>
            <h4 className="title rightbarTitle">User Information title</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Singapore</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Singapore</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Software Developer</span>
                </div>
            </div>
            <h4 className="title rightbarTitle">User Friends</h4>
            <div className="container3 rightbarFollowings">
                {Users.map(({ id, profilePicture, username }) => (
                    <div className="container3" key={id}>
                        <img className="profileImage" src={profilePicture} alt="" />
                        <span className="profileUsername">{username}</span>
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
        </div>
    );
}
