import { useState } from 'react';

export default function AIClubManagementSystem() {
  const [selectedClub, setSelectedClub] = useState('');
  const [registeredEvent, setRegisteredEvent] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [selectedClubDetails, setSelectedClubDetails] = useState(null);
  const [notificationsList, setNotificationsList] = useState([

    'Your registration for AI Hackathon is approved.',
    'Coding Club posted a new announcement.',
    'AI recommends joining Robotics Club.',
  ]);

  const handleJoinClub = (clubName) => {
    setSelectedClub(clubName);
    alert(`Successfully joined ${clubName}`);

    setNotificationsList((prev) => [
      `You joined ${clubName}.`,
      ...prev,
    ]);
  };

  const handleEventRegistration = (eventName) => {
    setRegisteredEvent(eventName);
    alert(`Successfully registered for ${eventName}`);

    setNotificationsList((prev) => [
      `Registered for ${eventName}.`,
      ...prev,
    ]);
  };

  const handleGenerateReport = () => {
    alert('AI Analytics Report Generated Successfully');
  };

  const handleExploreClubs = () => {
  setActiveTab("clubs");
};

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [joinedMessage, setJoinedMessage] = useState('');

  const handleWatchDemo = () => {
    alert('Demo Video Coming Soon');
  };

  const handleLogin = () => {
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
      setShowLoginForm(false);

      setNotificationsList((prev) => [
        `Logged in as ${loginEmail}`,
        ...prev,
      ]);

      alert(`Welcome ${loginEmail}`);
    } else {
      alert('Please enter email and password');
    }
  };

  const handleJoinNow = () => {
    setJoinedMessage('Welcome to AI ClubSphere Community');

    setNotificationsList((prev) => [
      'Successfully joined AI ClubSphere.',
      ...prev,
    ]);
  };
  const stats = [
    { title: 'Total Clubs', value: '24+' },
    { title: 'Students', value: '3200+' },
    { title: 'Events', value: '180+' },
    { title: 'AI Recommendations', value: '950+' },
  ];

 const clubs = [
 {
  name: "ECO Club",
  description: "Promotes environmental awareness and sustainability among students.",
  majorEvent: "Eternity & Vanya Chaithanya",
  eventDescription: "Environmental awareness and wildlife conservation events.",
  fullDescription: `
ETERNITY

Eternity is an event which triggers eco-concern among technical students and develops an understanding that nature is the ultimate technology.

VANYA CHAITHANYA

Vanya Chaithanya is an event designed to imbibe concern for wildlife and wilderness in budding minds in and around Hassan.

Through these events, the ECO Club creates awareness about environmental conservation, biodiversity protection, and sustainable living practices among students.
`
},

  {
    name: "LEO Club",
    description: "Develops leadership qualities and social responsibility among students.",
    majorEvent: "Leadership Activities",
    eventDescription: "Conducts leadership development and community service activities."
  },

  {
  name: "Literary Club",
  description: "Organizes literary, cultural and creative activities for students.",
  majorEvent: "The Malnad Fest",
  eventDescription: "Annual cultural and literary festival of MCE.",
  fullDescription: `
THE MALNAD FEST

The Literary Club organizes THE MALNAD FEST, the annual fest of Malnad College of Engineering.

It features more than 35 sub-events and is celebrated as one of the biggest festivals in the college.

The fest is organized during the even semester and usually runs for 2 to 3 days.

A major attraction is ETHNIC DAY, where students celebrate Indian culture and heritage through traditional attire and cultural activities.

Several qualifying rounds are conducted before the final fest days, making it a grand platform for creativity, talent, and student participation.
`
},

  {
  name: "Rotaract Club",
  description: "Focuses on leadership, community service and personality development.",
  majorEvent: "Reflections, Saviskaar, Tussle",
  eventDescription: "Major events conducted by Rotaract Club.",
  fullDescription: `
REFLECTIONS

Reflections is an inter-school competition conducted by the Rotaract Club.

It hosts more than 47 events and attracts around 2500 students from various schools.

The event provides a huge platform for students to showcase their talents and compete for the championship trophy.

SAVISKAAR

Saviskaar is a college-sponsored event organized by Rotaract Club members.

The event welcomes newcomers and encourages creativity, confidence, and teamwork.

More than 700 students from 9 branches have participated in this event.

TUSSLE

Tussle is a mock interview event designed to prepare students for future placement drives.

The event helps students improve communication skills, confidence, and interview performance before attending real company interviews.
`
},

  {
  name: "DevOps Club",
  description: "Promotes software development, cloud computing and DevOps practices.",
  majorEvent: "HACK.MCE 3.0",
  eventDescription: "Major technical fest conducted by DevOps Team.",
  fullDescription: `
HACK.MCE 3.0

HACK.MCE 3.0 was hosted by the DevOps Team on the 16th, 17th and 22nd of December 2023.

The event included a Gameathon conducted a week earlier at the college canteen.

The main events were organized in the auditorium and featured multiple technical competitions, gaming events, and collaborative activities.

The fest successfully brought together technology enthusiasts and gamers from various departments.

The DevOps Team strongly believes in collaboration, continuous learning, and staying updated with the latest technologies and industry trends.
`
},

  {
    name: "SPICMACAY",
    description: "Promotes Indian classical music, dance and cultural heritage.",
    majorEvent: "Cultural Programs",
    eventDescription: "Conducts workshops and performances by renowned artists."
  },

  {
  name: "Science Association",
  description: "Encourages scientific thinking and practical learning.",
  majorEvent: "SCIENTIA",
  eventDescription: "One of the largest technical events conducted in MCE.",
  fullDescription: `
SCIENTIA

The word Scientia is derived from Latin and means knowledge, experience, and expertise.

Scientia is one of the major technical events organized by Malnad College of Engineering.

The event focuses on demonstrating the practical applications of science and technology.

Students and participants from across the state gather to witness this intercollegiate technical fest.

Several inter-branch and open competitions are organized to promote innovation, scientific thinking, and overall personality development.
`
},

 {
  name: "Technical Club",
  description: "Provides a platform for innovation and technical excellence.",
  majorEvent: "ENIGMA",
  eventDescription: "State-level technical fest with national-level competitions.",
  fullDescription: `
ENIGMA

ENIGMA is a state-level technical fest organized by the Technical Club.

Over the years, it has expanded to include several national-level competitions.

The fest operates under the tagline:

"Unleash the Mystery of Technology"

ENIGMA provides a platform for students to demonstrate technical skills, innovation, problem-solving abilities, and engineering excellence.
`
},

  {
    name: "FOSS Club",
    description: "Promotes Free and Open Source Software technologies.",
    majorEvent: "Open Source Workshops",
    eventDescription: "Conducts Linux, GitHub and open-source contribution workshops."
  },

  {
  name: "IUCEE EWB Chapter",
  description: "Promotes innovation, engineering and entrepreneurship.",
  majorEvent: "AAVISHKAR MANTHAN",
  eventDescription: "National-level innovation and entrepreneurship event.",
  fullDescription: `
AAVISHKAR MANTHAN

AAVISHKAR MANTHAN is a national-level event organized by the IUCEE-EWB-MCE Student Chapter.

The event serves as a platform for students from institutions across India to showcase innovative ideas and solutions.

It encourages creativity, collaboration, entrepreneurship, and problem-solving.

Major activities include:

• IDEATHON
• ELOCUTION
• WALKATHON
• BONFIRE

The event inspires participants to think innovatively and contribute towards engineering solutions for society.
`
}
];

 const events = [
  {
    title: "The Malnad Fest",
    date: "Annual Event",
    description: "The biggest cultural and literary festival of MCE."
  },

  {
    title: "Reflections",
    date: "Annual Event",
    description: "Inter-school competition with 47+ events."
  },

  {
    title: "SCIENTIA",
    date: "Technical Fest",
    description: "State-level science and technical event."
  },

  {
    title: "ENIGMA",
    date: "Technical Fest",
    description: "Technical competition platform for students."
  },

  {
    title: "HACK.MCE",
    date: "Hackathon",
    description: "Coding and innovation challenge organized by DevOps Club."
  },

  {
    title: "AAVISHKAR MANTHAN",
    date: "National Level",
    description: "Innovation and entrepreneurship event."
  }
];

  const notifications = notificationsList;

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white font-sans">

      {showLoginForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-cyan-400">Login</h2>

              <button
                onClick={() => setShowLoginForm(false)}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-5">
              <input
                type="email"
                placeholder="Enter Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
              />

              <button
                onClick={handleLogin}
                className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400"
              >
                Login Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
           <h1 className="text-2xl font-bold text-cyan-400">
    Malnad College of Engineering
  </h1>

  <p className="text-xs text-slate-400">
    Clubs Management System
  </p>  
          </div>

          <div className="hidden md:flex gap-8 text-sm">
            <button onClick={() => setActiveTab("home")}>
  Home
</button>

<button onClick={() => setActiveTab("clubs")}>
  Clubs
</button>

<button onClick={() => setActiveTab("events")}>
  Events
</button>

<button onClick={() => setActiveTab("dashboard")}>
  Dashboard
</button>

<button onClick={() => setActiveTab("analytics")}>
  Analytics
</button>
<button onClick={() => setActiveTab("grievance")}>
  Grievance
</button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowLoginForm(true)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20"
            >
              {isLoggedIn ? 'Logged In' : 'Login'}
            </button>
            <button
              onClick={handleJoinNow}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
            >
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* HOME SECTION */}
{activeTab === "home" && (
  <section className="h-[85vh] overflow-y-auto">
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 mb-6">
            AI Driven Clubs & Organizations Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Malnad College of Engineering
            <span className="text-cyan-400">
              {" "}Clubs & Organizations
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            An intelligent platform for managing clubs, events, students,
            analytics, attendance, AI recommendations, chatbot support,
            gamification, and smart engagement.
          </p>

          {joinedMessage && (
            <div className="mt-4 p-4 rounded-2xl bg-cyan-500/20 border border-cyan-500/20 text-cyan-300">
              {joinedMessage}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleExploreClubs}
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              Explore Clubs
            </button>

            <button
              onClick={handleWatchDemo}
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE STATS */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:scale-105 transition"
            >
              <h2 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h2>

              <p className="mt-3 text-slate-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* FEATURES SECTION INSIDE HOME */}
      <div className="mt-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Core Features
          </h2>

          <p className="text-slate-400 mt-4">
            Modern AI-powered Clubs & Organizations experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'AI Club Recommendations',
            'Smart Event Management',
            'AI Chatbot Assistant',
            'Gamification System',
            'Attendance Tracking',
            'Analytics Dashboard',
            'Certificate Generator',
            'Grievance Management',
            'Community Feed',
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-2 transition"
            >
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 mb-5"></div>

              <h3 className="font-semibold text-lg">
                {feature}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                Intelligent and responsive user interface for campus clubs.
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
)}


      {/* CLUBS SECTION */}
      {activeTab === "clubs" && (
<section className="h-[85vh] overflow-y-auto">
        <div className="mb-12">
  <h2 className="text-4xl font-bold">
    MCE Clubs & Organizations
  </h2>

  <p className="text-slate-400 mt-2">
    Explore all official clubs and student organizations of MCE Hassan.
  </p>
</div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:scale-105 transition"
            >
              <div className="flex items-center justify-between">
                <div>
  <h3 className="text-2xl font-bold text-cyan-400">
    {club.name}
  </h3>

  <p className="mt-3 text-slate-300">
    {club.description}
  </p>

  <div className="mt-4 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
    <h4 className="font-semibold text-cyan-300">
      Major Event: {club.majorEvent}
    </h4>

    <p className="mt-2 text-sm text-slate-400">
      {club.eventDescription}
    </p>
  </div>
</div>

                <div className="h-16 w-16 rounded-2xl bg-cyan-500/20"></div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => handleJoinClub(club.name)}
                  className="flex-1 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
                >
                  Join Club
                </button>

                <button
  onClick={() => setSelectedClubDetails(club)}
  className="flex-1 py-3 rounded-xl border border-white/20 hover:bg-white/10"
>
  Details
</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

 {/* EVENTS SECTION */}
      {activeTab === "events" && (
<section className="h-[85vh] overflow-y-auto max-w-7xl mx-auto px-6 py-20">


        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Upcoming Events</h2>
          <p className="mt-4 text-slate-400">
            Discover exciting campus events and workshops.
          </p>
        </div>
        

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 transition"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/30 to-indigo-500/20"></div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs mb-4">
                  {event.date}
                </div>

                <h3 className="text-2xl font-bold">{event.title}</h3>

                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleEventRegistration(event.title)}
                    className="flex-1 py-3 rounded-xl bg-cyan-500 text-black font-semibold"
                  >
                    Register
                  </button>

                  <button
                    onClick={() => alert(`${event.title} event details opened`)}
                    className="flex-1 py-3 rounded-xl border border-white/20 hover:bg-white/10"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </section>
      )}

{/* AI DASHBOARD */}
      {activeTab === "dashboard" && (
<section className="h-[85vh] overflow-y-auto max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Student Dashboard</h2>
                <p className="text-slate-400 mt-2">
                  Personalized AI-powered insights.
                </p>
              </div>

              <button
                onClick={handleGenerateReport}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold"
              >
                Generate Report
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="p-6 rounded-2xl bg-slate-900/70">
                <h3 className="text-slate-400">Attendance</h3>
                <h2 className="text-4xl font-bold mt-3 text-cyan-400">92%</h2>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/70">
                <h3 className="text-slate-400">Events Joined</h3>
                <h2 className="text-4xl font-bold mt-3 text-cyan-400">18</h2>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/70">
                <h3 className="text-slate-400">XP Points</h3>
                <h2 className="text-4xl font-bold mt-3 text-cyan-400">2450</h2>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20">
              <h3 className="text-2xl font-bold">AI Recommendation</h3>
              <p className="mt-3 text-slate-300">
                Based on your participation in coding competitions and AI
                workshops, the system recommends joining the Robotics Club and
                Entrepreneurship Club.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold">Notifications</h2>

            <div className="mt-8 space-y-4">
              {notifications.map((note, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-900/70 border border-white/5"
                >
                  <p className="text-sm text-slate-300">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
     </section>
)}

 {/* ANALYTICS SECTION */}
      {activeTab === "analytics" && (
<section className="h-[85vh] overflow-y-auto max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Analytics & Insights</h2>
          <p className="mt-4 text-slate-400">
            Smart analytics for student engagement and club performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Participation Trends</h3>
              <div className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-sm">
                AI Insights
              </div>
            </div>

            <div className="h-64 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center text-slate-300">
              Chart Visualization Area
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Leaderboard</h3>
              <div className="px-4 py-2 rounded-xl bg-yellow-500/20 text-yellow-300 text-sm">
                Top Students
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Tejas Kumar',
                'Rahul Sharma',
                'Ananya Rao',
                'Priya Shetty',
              ].map((student, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/70"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-cyan-500/20"></div>
                    <div>
                      <h4 className="font-semibold">{student}</h4>
                      <p className="text-sm text-slate-400">Active Member</p>
                    </div>
                  </div>

                  <div className="text-cyan-400 font-bold">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
)}
{/* GRIEVANCE SECTION */}
{activeTab === "grievance" && (
  <section className="h-[85vh] overflow-y-auto max-w-7xl mx-auto px-6 py-20">

    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold">
        Grievance Management System
      </h2>

      <p className="mt-4 text-slate-400">
        Raise complaints and track resolutions for hostel and campus issues.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Hostel Complaints */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300">
        <div className="h-16 w-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-6">
          🏠
        </div>

        <h3 className="text-3xl font-bold text-cyan-400">
          Hostel Complaints
        </h3>

        <p className="mt-4 text-slate-300">
          Report issues related to hostel facilities and services.
        </p>

        <div className="mt-6 space-y-3 text-slate-400">
          <p>• Water Supply Issues</p>
          <p>• Electricity Problems</p>
          <p>• Food Quality Complaints</p>
          <p>• Room Maintenance</p>
          <p>• Wi-Fi Connectivity</p>
        </div>

        <button
          onClick={() => alert("Hostel Complaint Portal Opened")}
          className="mt-8 w-full py-3 rounded-2xl bg-cyan-500 text-black font-semibold"
        >
          Raise Complaint
        </button>
      </div>

      {/* Campus Complaints */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300">
        <div className="h-16 w-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-6">
          🏫
        </div>

        <h3 className="text-3xl font-bold text-cyan-400">
          Campus Complaints
        </h3>

        <p className="mt-4 text-slate-300">
          Submit complaints related to campus infrastructure and facilities.
        </p>

        <div className="mt-6 space-y-3 text-slate-400">
          <p>• Classroom Maintenance</p>
          <p>• Laboratory Issues</p>
          <p>• Cleanliness Problems</p>
          <p>• Transportation Issues</p>
          <p>• Security Concerns</p>
        </div>

        <button
          onClick={() => alert("Campus Complaint Portal Opened")}
          className="mt-8 w-full py-3 rounded-2xl bg-cyan-500 text-black font-semibold"
        >
          Raise Complaint
        </button>
      </div>

    </div>

    {/* Complaint Tracking */}
    <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
      <h3 className="text-3xl font-bold text-cyan-400">
        Complaint Status Tracking
      </h3>

      <div className="mt-8 grid md:grid-cols-3 gap-6">

        <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
          <h4 className="text-xl font-bold text-yellow-400">
            Pending
          </h4>
          <p className="mt-3 text-3xl font-bold">
            18
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <h4 className="text-xl font-bold text-blue-400">
            In Progress
          </h4>
          <p className="mt-3 text-3xl font-bold">
            12
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
          <h4 className="text-xl font-bold text-green-400">
            Resolved
          </h4>
          <p className="mt-3 text-3xl font-bold">
            86
          </p>
        </div>

      </div>
    </div>

  </section>
)}
{/* COMMUNITY FEED */}
      {activeTab === "home" && (
<section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Community Feed</h2>
          <p className="mt-4 text-slate-400">
            Share updates, achievements, and activities.
          </p>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-cyan-500/20"></div>
                <div>
                  <h3 className="font-bold">Club Member</h3>
                  <p className="text-sm text-slate-400">2 hours ago</p>
                </div>
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                Successfully completed the AI innovation workshop and gained
                hands-on experience in machine learning and automation.
              </p>

              <div className="mt-6 h-64 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"></div>
            </div>
          ))}
        </div>
      </section>
)}

{/* AI CHATBOT */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="h-16 w-16 rounded-full bg-cyan-500 text-black text-2xl font-bold shadow-2xl hover:scale-110 transition"
        >
          AI
        </button>

        {showChatbot && (
          <div className="absolute bottom-20 right-0 w-80 p-5 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              AI Assistant
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-white/5">
                Hello! How can I help you today?
              </div>

              <button
                onClick={() => alert('Showing upcoming events')}
                className="w-full py-2 rounded-xl bg-cyan-500 text-black font-semibold"
              >
                Upcoming Events
              </button>

              <button
                onClick={() => alert('Showing AI recommended clubs')}
                className="w-full py-2 rounded-xl bg-white/10"
              >
                Recommended Clubs
              </button>
            </div>
          </div>
        )}
      </div>
      {selectedClubDetails && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="w-full max-w-2xl p-8 rounded-3xl bg-slate-900 border border-cyan-500/20">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-cyan-400">
          {selectedClubDetails.name}
        </h2>

        <button
          onClick={() => setSelectedClubDetails(null)}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="text-slate-300 leading-relaxed whitespace-pre-line">
  {selectedClubDetails.fullDescription || selectedClubDetails.description}
</div>

      <div className="mt-6 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
        <h3 className="font-bold text-cyan-300">
          Major Event
        </h3>

        <p className="mt-2">
          {selectedClubDetails.majorEvent}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-cyan-300 mb-3">
          Event Description
        </h3>

        <p className="text-slate-300">
          {selectedClubDetails.eventDescription}
        </p>
      </div>

    </div>
  </div>
)}

{/* FOOTER */}
      {activeTab === "home" && (
<footer className="border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
    <div>
      <h2 className="text-2xl font-bold text-cyan-400">
        Malnad College of Engineering
      </h2>

      <p className="text-slate-400 mt-2 text-sm">
        Clubs Management System
      </p>
    </div>

    <div className="flex gap-6 text-sm text-slate-400">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Support</a>
    </div>
  </div>
</footer>
)}
</div>
);
}
