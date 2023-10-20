import './Profile.css'

function Profile() {
    return (

        <div className="content">
            <div className="profile">
                <img className="pic" alt="profile" src={"../images/pic"} />

                <div className="list">
                    <ul>
                        <li><strong>Name: </strong>Oliver Wang</li>
                        <li><strong>Country: </strong>Australia</li>
                        <li><strong>Language: </strong>English</li>
                        <li><strong>Programming: </strong><br/>HTML, CSS, JavaScript, Python, Java, SQL, C++</li>
                        <li><strong>Interests: </strong><br/>Traveling, Hiking, Reading, Programming, Swimming,
                            Badminton, Tennis </li>
                    </ul>

                </div>
            </div>
            <div className="intro">
                <h1>Welcome to my personal website!</h1>
                <h2>About myself</h2>
                <p>
                    I am currently living in Australia and working for consulting companies in the financial services
                    industry. I am keen to further develop my career in the world of software engineering, and this
                    is the first website I developed about myself.
                </p>
                <h2>What I'm learning</h2>
                <p>
                    I am developing this website using REACT framework as part of my learning journey with AppAcademy. 
                    My learning path includes both front-end and back-end development, data structure and algorithms.
                </p>
                <h2>About my bootcamp</h2>
                <p>
                    AppAcademy provides end-to-end training program for people who wants to strengthen their technical skills 
                    in order to become full stack developers.
                </p>
            </div>
        </div>
    )
}

export default Profile;