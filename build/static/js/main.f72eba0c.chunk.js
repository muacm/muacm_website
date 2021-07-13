(this.webpackJsonpacm_react = this.webpackJsonpacm_react || []).push([
  [0],
  {
    10: function (e, t, a) {},
    31: function (e, t, a) {},
    44: function (e, t, a) {},
    45: function (e, t, a) {},
    46: function (e, t, a) {},
    53: function (e, t, a) {},
    54: function (e, t, a) {},
    55: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(1),
        n = a.n(i),
        s = a(16),
        r = a.n(s),
        c = a(12),
        o = a(2),
        l = a(4),
        h =
          (a(10),
          {
            Events: [
              {
                event_title: "Web development BootCamp",
                event_description:
                  "Medicaps University ACM Student Chapter (MUACM) in collaboration with Google Developers Group, Indore is hosting a 10 day Web Development BootCamp! Creating a web app using HTML, CSS, React and how to use Git and GitHub will be taught from scratch.",
                event_date: "July 22, 2021 - Aug 01, 2021",
                status: "upcoming",
                registration_url: "https://bit.ly/MUACM-WebDev-Bootcamp",
              },
              {
                event_title: "Demystifying Data Science",
                event_description:
                  "This event was based on understanding the basics of Data Science with the speaker Dr. Neha Sharma. She is working with Tata Consultancy Services and is also a Founder Secretary of Society for Data Science.",
                event_date: "12/06/2021",
                status: "done",
              },
              {
                event_title: "Induction Programme",
                event_description:
                  "Introduced MUACM to our student community and guided them about the upcoming sessions, events and roles.",
                event_date: "31/03/2021",
                status: "done",
              },
              {
                event_title: "Community Connect - Introduction to Open Source",
                event_description:
                  "This session was an introduction to Open Source for Beginners. Yash Sehgal discussed guided folks on how to get started with Open Source contribution.",
                event_date: "08/05/2021",
                status: "done",
              },
            ],
          }),
        d = (a(31), a(11)),
        m = a.n(d),
        b = a(0),
        j = function (e) {
          var t = e.event_details,
            a = Object(i.useState)(!1),
            n = Object(l.a)(a, 2),
            s = n[0],
            r = n[1];
          return "done" === t.status
            ? Object(b.jsxs)("div", {
                className: "EventCard",
                onClick: function () {
                  r(!0);
                },
                style: {
                  cursor: "pointer",
                  borderBottom: "4px solid",
                  borderColor: "red",
                },
                children: [
                  Object(b.jsx)("h3", {
                    className: "event_title",
                    children: t.event_title,
                  }),
                  Object(b.jsx)("p", {
                    className: "event_description",
                    children: t.event_description,
                  }),
                  Object(b.jsx)("p", {
                    className: "event_date",
                    children: t.event_date,
                  }),
                  Object(b.jsx)("span", {
                    style: { color: "red", fontFamily: "inherit" },
                    children: "Done",
                  }),
                  Object(b.jsxs)(m.a, {
                    isOpen: s,
                    onRequestClose: function () {
                      return r(!1);
                    },
                    style: {
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                        width: "880px",
                        height: "500px",
                        overflow: "hidden",
                        boxSizing: "border-box",
                      },
                      content: {
                        background: "white",
                        border: "none",
                        boxShadow: "4px 4px 14px rgba(0, 0, 0, 0.225)",
                      },
                    },
                    children: [
                      Object(b.jsx)("h1", { children: t.event_title }),
                      Object(b.jsx)("p", { children: t.event_description }),
                      Object(b.jsxs)("span", {
                        children: [
                          "Held on (",
                          Object(b.jsx)("b", { children: t.event_date }),
                          ")",
                        ],
                      }),
                      Object(b.jsx)("p", {
                        style: { color: "red", fontFamily: "inherit" },
                        children: "Done",
                      }),
                    ],
                  }),
                ],
              })
            : "upcoming" === t.status
            ? Object(b.jsxs)("div", {
                className: "EventCard",
                onClick: function () {
                  r(!0);
                },
                style: {
                  cursor: "pointer",
                  borderBottom: "4px solid",
                  borderColor: "blue",
                },
                children: [
                  Object(b.jsx)("h3", {
                    className: "event_title",
                    children: t.event_title,
                  }),
                  Object(b.jsx)("p", {
                    className: "event_description",
                    children: t.event_description,
                  }),
                  Object(b.jsx)("p", {
                    className: "event_date",
                    children: t.event_date,
                  }),
                  Object(b.jsx)("span", {
                    style: { color: "blue", fontFamily: "inherit" },
                    children: "Upcoming",
                  }),
                  Object(b.jsxs)(m.a, {
                    isOpen: s,
                    onRequestClose: function () {
                      return r(!1);
                    },
                    style: {
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                        width: "880px",
                        height: "500px",
                        overflow: "hidden",
                        boxSizing: "border-box",
                      },
                      content: {
                        background: "white",
                        border: "none",
                        boxShadow: "4px 4px 14px rgba(0, 0, 0, 0.225)",
                      },
                    },
                    children: [
                      Object(b.jsx)("h1", { children: t.event_title }),
                      Object(b.jsx)("p", { children: t.event_description }),
                      Object(b.jsxs)("span", {
                        children: [
                          "Will be held on (",
                          Object(b.jsx)("b", { children: t.event_date }),
                          ")",
                        ],
                      }),
                      Object(b.jsx)("p", {
                        style: { color: "blue", fontFamily: "inherit" },
                        children: "Upcoming",
                      }),
                      Object(b.jsx)("a", {
                        href: t.registration_url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: Object(b.jsx)("button", {
                          className: "primaryButton",
                          children: "Register for the event",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : Object(b.jsx)(b.Fragment, {});
        },
        u = a(22),
        p = a(23),
        g = a(26),
        w = a(25),
        f =
          (a(44),
          (function (e) {
            Object(g.a)(a, e);
            var t = Object(w.a)(a);
            function a() {
              return Object(u.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(p.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return Object(b.jsxs)("div", {
                      className: "form_container",
                      style: { marginRight: "auto", marginLeft: "auto" },
                      children: [
                        Object(b.jsxs)("form", {
                          id: "myForm",
                          className: "form_main",
                          children: [
                            Object(b.jsx)("label", {
                              class: "form_label",
                              children: "First Name",
                            }),
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("input", {
                              class: "form_input",
                              name: "First_Name",
                            }),
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("label", {
                              class: "form_label",
                              children: "Last Name",
                            }),
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("input", {
                              class: "form_input",
                              name: "Last_Name",
                            }),
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("label", {
                              class: "form_label",
                              children: "Email",
                            }),
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("input", {
                              class: "form_input",
                              name: "E-Mail",
                            }),
                            Object(b.jsx)("br", {}),
                            " ",
                            Object(b.jsx)("br", {}),
                          ],
                        }),
                        Object(b.jsx)("div", {
                          class: "button_container",
                          children: Object(b.jsx)("button", {
                            onclick: "SubForm()",
                            class: "form_button",
                            children: Object(b.jsx)("b", {
                              children: "Subscribe",
                            }),
                          }),
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(n.a.Component)),
        x = function () {
          var e = Object(i.useState)(h.Events),
            t = Object(l.a)(e, 1)[0],
            a = Object(i.useState)(!0),
            n = Object(l.a)(a, 2),
            s = n[0],
            r = n[1];
          return Object(b.jsxs)("div", {
            className: "Home",
            children: [
              Object(b.jsx)("h2", {
                className: "tagline",
                children:
                  "We believe in building a great technical community of Students",
              }),
              Object(b.jsx)("span", {
                className: "button_layer",
                children: Object(b.jsx)("a", {
                  href: "https://discord.gg/kWhRdyddve",
                  target: "_blank",
                  children: Object(b.jsx)("button", {
                    className: "primaryButton",
                    style: { marginRight: "auto", marginLeft: "auto" },
                    children: Object(b.jsxs)("span", {
                      children: [
                        "Join Discord",
                        Object(b.jsx)("i", { className: "fab fa-discord" }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(b.jsxs)("div", {
                className: "content-section",
                id: "about-mu",
                style: { textAlign: "center" },
                children: [
                  Object(b.jsx)("h2", {
                    children: "About Medicaps University",
                  }),
                  Object(b.jsx)("p", {
                    className: "content",
                    children:
                      "Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.",
                  }),
                ],
              }),
              Object(b.jsxs)("div", {
                className: "content-section",
                id: "about-acm",
                children: [
                  Object(b.jsx)("h2", { children: "About ACM" }),
                  Object(b.jsx)("div", {
                    children: Object(b.jsx)("iframe", {
                      width: "560",
                      height: "315",
                      src: "https://www.youtube-nocookie.com/embed/BHIbT0e7LTc",
                      title: "YouTube video player",
                      frameBorder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: !0,
                      id: "youtube-video",
                    }),
                  }),
                  Object(b.jsx)("div", {
                    children: Object(b.jsx)("p", {
                      className: "content",
                      children:
                        "The ACM (Association for Computing Machinery) is a 74-year-old international scientific and industrial computer society. Through its many Special Interest Groups, the ACM fosters research and communication in a broad range of computing areas. The society has around 100,000 members including students and professionals, spread over 174 countries leading to interaction between diversified computing enthusiasts. ACM conducts various worldwide competitions and seminars, where we have learned and scholarly speakers to provide us with the opportunity to increase our knowledge and expand our horizons. ACM provides us with one of the most enriching digital libraries which consists of database full-text articles and bibliographic literature covering computing and information technology. This leads us to availability of critical content being easily discoverable and accessible. ACM strengthens the computing profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM leads us to the pathway following which in the near future, world\u2019s biggest problems will be solved using computing.",
                    }),
                  }),
                ],
              }),
              Object(b.jsxs)("div", {
                className: "content-section",
                id: "about-muacm",
                children: [
                  Object(b.jsx)("h2", {
                    children: "About ACM Medicaps Chapter",
                  }),
                  Object(b.jsx)("p", {
                    className: "content",
                    children:
                      "MUACM is an official computing student chapter of Medi-caps university under the patronage of technical club STIC. We are not just an organization, we are family of like-minded people who intend to make a difference in the society, MUACM provides you a platform to explore, experience and contribute to the computing world globally. It encourages you to pave the path of your career under the guidance of professional. The chapter organizes several jaw-dropping events, seminars, learning forums, talks by renowned speakers, field trips, contests which includes international college programming contest, student research competition, it also gives an advantage to access all the services and activities of its parent organization ACM with an opportunity to develop leadership skills all of these develops the competitive spirit and develops the skills suitable for the advancement of the technical world. To sum up inception of MUACM creates a bridge between you and the computing world, it opens the door for your dream success.",
                  }),
                ],
              }),
              Object(b.jsxs)("div", {
                className: "content-section",
                id: "about-why-muacm",
                children: [
                  Object(b.jsx)("h2", { children: "Why Connect with ACM" }),
                  Object(b.jsx)("p", {
                    className: "content",
                    children:
                      "Anybody who believes that as a professional you want to be the best professional you can be and take the world\u2019s computing skills to another magical level, then ACM is what speaks to that aspiration. Apart from the numerous benefits that we receive such as an excellent access to the digital library and various publications, ACM considers itself a family where you will feel like you belong, the community believes in the growth and prosperity of its members and finding solutions to world problems using technical knowledge. When you become a member, you become a part of the dynamic changes that are transforming our world, by helping to shape the future of computing. ACM provides the tools and resources to help get you there, by advancing your career and enriching your knowledge with life-long learning resources. Additionally, ACM being a reputed organisation in the industry leads to higher recognition when it is mentioned on a student\u2019s resume especially if you are a part of various competitions and events being conducted throughout the year. Being a part of this community is an honour in itself and definitely leads to your personal and professional growth.",
                  }),
                ],
              }),
              Object(b.jsxs)("div", {
                className: "events-section",
                style: { marginTop: "3.6em" },
                children: [
                  Object(b.jsx)("h2", {
                    style: { textAlign: "center" },
                    children: "Events",
                  }),
                  Object(b.jsx)("div", {
                    className: "event-card-container",
                    children: t.map(function (e, t) {
                      return Object(b.jsx)(j, { event_details: e });
                    }),
                  }),
                ],
              }),
              Object(b.jsx)(m.a, {
                isOpen: s,
                onRequestClose: function () {
                  return r(!1);
                },
                style: {
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                    width: "880px",
                    height: "800px",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  },
                  content: {
                    background: "none",
                    border: "none",
                    outline: "none",
                  },
                },
                className: "animate__animated animate__fadeInUp",
                children: Object(b.jsx)(f, {}),
              }),
            ],
          });
        },
        O = {
          HOD: [
            {
              Name: "Dheeraj Rane",
              Title: "Faculty Coordinator",
              type: "faculty",
              email: "dheeraj.rane@medicaps.ac.in",
            },
          ],
        },
        k = {
          Council: [
            {
              Name: "Nishant Gandhi",
              Title: "Chairman",
              linkedin: "https://www.linkedin.com/in/nishant-gandhi-1503",
              twitter: "https://www.twitter.com/nishant1503",
              github: "https://github.com/nishant1503",
              instagram: "https://www.instagram.com/_irresponsible__beardo_",
              facebook: "https://www.facebook.com/nishant.gandhi.1515",
            },
            {
              Name: "Sarthak Khandelwal",
              Title: "Vice Chairman",
              linkedin: "https://www.linkedin.com/in/forwet/",
              twitter: "https://twitter.com/Sarthak60130220",
              github: "https://github.com/sarthakforwet",
              instagram: "https://www.instagram.com/sarthakkhandelwal7676/",
              facebook: "https://www.facebook.com/sarthakforwet/",
            },
            {
              Name: "Hiteshi Gupta",
              Title: "Treasurer",
              linkedin: "https://www.linkedin.com/in/hiteshi-gupta-7a51b5191/",
              twitter: "https://www.twitter.com/hiteshii_",
              github: "",
              instagram: "https://www.instagram.com/hiteshiiiii__",
              facebook: "",
            },
          ],
        },
        v = {
          Core: [
            {
              Name: "Yash Sehgal",
              Title: "Junior Coordinator",
              linkedin: "https://www.linkedin.com/in/yash-sehgal-55b7711a4/",
              twitter: "https://twitter.com/YashSeh90869786",
              github: "https://www.github.com/yashsehgal",
              instagram: "https://www.instagram.com/sehgalyash_/",
              facebook: "https://www.facebook.com/yash.sehgal.96780/",
            },
            {
              Name: "Saud Hashmi",
              Title: "Head of Content",
              linkedin: "https://www.linkedin.com/in/saud-hashmi-19a317a3/",
              twitter: "https://twitter.com/Hash_Saud",
              github: "https://github.com/SuperbSaud/",
              instagram: "https://www.instagram.com/i_s.a.u.d/",
              facebook: "https://www.facebook.com/saud.hashmi.161/",
            },
            {
              Name: "Riya Ahuja",
              Title: "Head of Management",
              linkedin: "https://www.linkedin.com/in/riya-ahuja-81bb231b3/",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/riyaahuja84",
              facebook: "",
            },
            {
              Name: "Samriddhi Kaur",
              Title: "Head of Graphics",
              linkedin: "https://www.linkedin.com/in/samriddhi-kaur-b02b78204/",
              twitter: "",
              github: "https://github.com/samriddhik562",
              instagram: "https://www.instagram.com/samriddhi.k.562/",
              facebook: "",
            },
            {
              Name: "Ritika Maheshwari",
              Title: "Head of Marketing",
              linkedin:
                "https://www.linkedin.com/in/ritika-maheshwari-7837871ab/",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/__ritika16/",
              facebook: "",
            },
            {
              Name: "Mihir Dutta",
              Title: "Technical Head",
              linkedin: "https://www.linkedin.com/in/mihirduttaa/",
              twitter: "https://twitter.com/exclusivemihir",
              github: "https://github.com/mihirduttaa",
              instagram: "https://www.instagram.com/mihirduttaa/",
              facebook:
                "https://www.facebook.com/profile.php?id=100005641725979",
            },
          ],
        },
        y = {
          Executive: [
            {
              Name: "Tanisha Jain",
              Title: "Graphic Designer",
              linkedin: "https://www.linkedin.com/in/tanisha-jain-60703120b/",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/tanishahahaaha/",
              facebook: "",
            },
            {
              Name: "Mayank Verma",
              Title: "Management Team",
              linkedin: "https://www.linkedin.com/in/mayank-v-946404131/",
              twitter: "",
              github: "https://github.com/MVerma44",
              instagram: "https://www.instagram.com/vmayank_007/",
              facebook: "",
            },
            {
              Name: "Jaspreet Singh Saini",
              Title: "Graphic Designer",
              linkedin:
                "https://www.linkedin.com/in/jaspreet-singh-saini-a916111b2/",
              twitter: "https://twitter.com/s_jaspreet099",
              github: "https://github.com/Jaspreet099",
              instagram: "https://www.instagram.com/official_jaspreet_saini/",
              facebook: "",
            },
            {
              Name: "Samarth Sharma",
              Title: "Marketing and Management",
              linkedin: "https://www.linkedin.com/in/samarth-sharma2406/",
              twitter: "",
              github: "https://github.com/24samarth",
              instagram: "https://www.instagram.com/_samarth_sharma._/",
              facebook: "",
            },
            {
              Name: "Aditi Mandlik",
              Title: "Content and Graphics Team",
              linkedin: "https://www.linkedin.com/in/aditi-mandlik-b95386209/",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/aditimandlik/",
              facebook: "",
            },
            {
              Name: "Preeti Mehta Jain",
              Title: "Marketing and Management",
              linkedin: "https://www.linkedin.com/in/prateeti-mehta-33186420a/",
              twitter: "https://twitter.com/PrateetiJ",
              github: "",
              instagram: "https://www.instagram.com/prateetimjain/",
              facebook: "",
            },
            {
              Name: "Rajesh Nathani",
              Title: "Web Development Team",
              linkedin: "https://www.linkedin.com/in/rajesh-nathani-5a186a145/",
              twitter: "",
              github: "https://github.com/RajeshNathani",
              instagram: "https://www.instagram.com/rajesh.nathani1/",
              facebook: "",
            },
            {
              Name: "Aditi Dandawate",
              Title: "Content and Graphics",
              linkedin: "https://www.linkedin.com/in/aditi-dandawate-84704120b",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/aditi_dandawate/",
              facebook: "",
            },
            {
              Name: "Suchismita Nanda",
              Title: "Marketing and Management",
              linkedin:
                "https://www.linkedin.com/in/suchismita-nanda-221a4b201",
              twitter: "https://twitter.com/Suchi2407?s=08",
              github: "https://github.com/suchismita2407",
              instagram: "https://www.instagram.com/suchi_9624/",
              facebook: "",
            },
            {
              Name: "Ishika Shahaney",
              Title: "Marketing and Management",
              linkedin: "https://www.linkedin.com/in/ishika-shahaney-b9b945201",
              twitter: "https://mobile.twitter.com/IShahaney",
              github: "https://github.com/Ishika1903",
              instagram: "https://www.instagram.com/__ishika1903/",
              facebook:
                "https://m.facebook.com/ishika.shahaney.5?ref=bookmarks",
            },
            {
              Name: "Raj Soni",
              Title: "Marketing and Management",
              linkedin: "https://www.linkedin.com/in/raj-soni-5306141b6/",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/raj_soni0717/",
              facebook: "",
            },
            {
              Name: "Anushka Jain",
              Title: "Marketing and Management",
              linkedin: "https://www.linkedin.com/in/anushka-jain-88a548209/",
              twitter: "",
              github: "",
              instagram: "https://www.instagram.com/anushkajain_28/",
              facebook: "",
            },
          ],
        },
        _ = (a(45), a.p + "static/media/yash.dced67c2.png"),
        N = a.p + "static/media/tanisha_jain.62b8fbaf.png",
        C = a.p + "static/media/suchismita.8e11b572.png",
        M = a.p + "static/media/saud.5826c4d3.png",
        S = a.p + "static/media/sarthak.e8bc2325.png",
        T = a.p + "static/media/samriddhi.53765dbe.png",
        A = a.p + "static/media/samarth_sharma.fe421bcd.png",
        D = a.p + "static/media/riya_ahuja.f0e6dd39.png",
        B = a.p + "static/media/ritika_maheshwari.79f49da7.png",
        R = a.p + "static/media/rajesh.041d97f9.png",
        H = a.p + "static/media/raj_soni.bda62e49.png",
        U = a.p + "static/media/prateeti.d327a64c.png",
        F = a.p + "static/media/nishant.e387cf1c.png",
        I = a.p + "static/media/mihir.1ba209ca.png",
        E = a.p + "static/media/mayank.b8ab0eab.png",
        L = a.p + "static/media/jaspreet.548f3a66.png",
        G = a.p + "static/media/ishika.b5e8af1d.png",
        J = a.p + "static/media/hiteshi.115f7dbd.png",
        W = a.p + "static/media/anushka_jain.2023953c.png",
        z = a.p + "static/media/aditi_mandlik.db57b5e0.png",
        V = {
          "Yash Sehgal": _,
          "Aditi Dandawate": a.p + "static/media/aditi_dandawate.1d08220e.png",
          "Aditi Mandlik": z,
          "Anushka Jain": W,
          "Hiteshi Gupta": J,
          "Ishika Shahaney": G,
          "Jaspreet Singh Saini": L,
          "Mayank Verma": E,
          "Mihir Dutta": I,
          "Nishant Gandhi": F,
          "Preeti Mehta Jain": U,
          "Raj Soni": H,
          "Rajesh Nathani": R,
          "Ritika Maheshwari": B,
          "Riya Ahuja": D,
          "Samarth Sharma": A,
          "Samriddhi Kaur": T,
          "Sarthak Khandelwal": S,
          "Saud Hashmi": M,
          "Suchismita Nanda": C,
          "Tanisha Jain": N,
          "Dheeraj Rane": a.p + "static/media/dheeraj.796df3c3.png",
        },
        q = function (e) {
          var t = e.TeamCard_Details;
          return "faculty" === t.type
            ? Object(b.jsxs)("div", {
                className: "TeamCard",
                children: [
                  Object(b.jsx)("img", { src: V[t.Name] }),
                  Object(b.jsx)("h3", { children: t.Name }),
                  Object(b.jsx)("p", { children: t.Title }),
                  Object(b.jsx)("div", {
                    className: "social-icons",
                    children: Object(b.jsx)("a", {
                      href: "mailto:" + t.email,
                      target: "_blank",
                      rel: "noreferrer",
                      children: Object(b.jsx)("i", {
                        class: "far fa-envelope",
                      }),
                    }),
                  }),
                ],
              })
            : "faculty" !== t.type
            ? Object(b.jsxs)("div", {
                className: "TeamCard",
                children: [
                  Object(b.jsx)("img", { src: V[t.Name] }),
                  Object(b.jsx)("h3", { children: t.Name }),
                  Object(b.jsx)("p", { children: t.Title }),
                  Object(b.jsxs)("div", {
                    className: "social-icons",
                    children: [
                      Object(b.jsx)("a", {
                        href: t.linkedin,
                        target: "_blank",
                        rel: "noreferrer",
                        children: Object(b.jsx)("i", {
                          className: "fab fa-linkedin",
                          id: "#linkedin",
                        }),
                      }),
                      Object(b.jsx)("a", {
                        href: t.github,
                        target: "_blank",
                        id: "#github",
                        rel: "noreferrer",
                        children: Object(b.jsx)("i", {
                          className: "fab fa-github",
                        }),
                      }),
                      Object(b.jsx)("a", {
                        href: t.twitter,
                        target: "_blank",
                        id: "#twitter",
                        rel: "noreferrer",
                        children: Object(b.jsx)("i", {
                          className: "fab fa-twitter",
                        }),
                      }),
                      Object(b.jsx)("a", {
                        href: t.instagram,
                        target: "_blank",
                        id: "#instagram",
                        rel: "noreferrer",
                        children: Object(b.jsx)("i", {
                          className: "fab fa-instagram",
                        }),
                      }),
                      Object(b.jsx)("a", {
                        href: t.facebook,
                        target: "_blank",
                        id: "#facebook",
                        rel: "noreferrer",
                        children: Object(b.jsx)("i", {
                          className: "fab fa-facebook",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : void 0;
        },
        K = function () {
          var e = Object(i.useState)(O.HOD),
            t = Object(l.a)(e, 1)[0],
            a = Object(i.useState)(k.Council),
            n = Object(l.a)(a, 1)[0],
            s = Object(i.useState)(v.Core),
            r = Object(l.a)(s, 1)[0],
            c = Object(i.useState)(y.Executive),
            o = Object(l.a)(c, 1)[0];
          return Object(b.jsxs)("div", {
            className: "Team",
            children: [
              Object(b.jsx)("h2", { children: "Team" }),
              Object(b.jsxs)("div", {
                className: "team-card-container",
                children: [
                  Object(b.jsx)("h3", { children: "Faculty Coordinator" }),
                  Object(b.jsx)("div", {
                    id: "HOD-container",
                    children: t.map(function (e, t) {
                      return Object(b.jsx)(q, { TeamCard_Details: e });
                    }),
                  }),
                  Object(b.jsx)("h3", { children: "Council Members" }),
                  Object(b.jsx)("div", {
                    id: "council-container",
                    children: n.map(function (e, t) {
                      return Object(b.jsx)(q, { TeamCard_Details: e });
                    }),
                  }),
                  Object(b.jsx)("h3", { children: "Core Members" }),
                  Object(b.jsx)("div", {
                    id: "core-container",
                    children: r.map(function (e, t) {
                      return Object(b.jsx)(q, { TeamCard_Details: e });
                    }),
                  }),
                  Object(b.jsx)("h3", { children: "Executive Members" }),
                  Object(b.jsx)("div", {
                    id: "executive-container",
                    children: o.map(function (e, t) {
                      return Object(b.jsx)(q, { TeamCard_Details: e });
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        P = function () {
          var e = Object(i.useState)(h.Events),
            t = Object(l.a)(e, 1)[0];
          return Object(b.jsxs)("div", {
            className: "Events",
            children: [
              Object(b.jsx)("h2", {
                style: { textAlign: "center" },
                children: "Events",
              }),
              Object(b.jsx)("div", {
                className: "event-card-container",
                children: t.map(function (e, t) {
                  return Object(b.jsx)(j, { event_details: e });
                }),
              }),
            ],
          });
        },
        Y = {
          Blogs: [
            {
              blog_title:
                "5 Shortcut Commands on Windows that can increase your productivity!",
              blog_url:
                "https://medium.com/muacm/5-shortcut-commands-on-windows-that-can-increase-your-productivity-124c9e49c17b",
              blog_author: "Editor Supreme, MUACM",
              bg_image: "https://miro.medium.com/max/7000/0*eNVxk7OKssTBcS8w",
              blog_author_profile_photo:
                "https://miro.medium.com/fit/c/96/96/1*LMsR5cqxpbD-SGjqblV16A.jpeg",
            },
            {
              blog_title: "Introducing Medi-Caps University ACM Chapter",
              blog_url:
                "https://medium.com/muacm/introducing-medi-caps-university-acm-chapter-e41cff5ddedc",
              blog_author: "Editor Supreme, MUACM",
              bg_image: "https://miro.medium.com/max/19200/0*VekSOTuBu8Z4Rd7e",
              blog_author_profile_photo:
                "https://miro.medium.com/fit/c/96/96/1*LMsR5cqxpbD-SGjqblV16A.jpeg",
            },
            {
              blog_title:
                "How Bitcoin runs on a blockchain and how the transactions work",
              blog_url:
                "https://medium.com/muacm/how-bitcoin-runs-on-a-blockchain-and-how-the-transactions-work-71175bff9f35",
              blog_author: "Saud Hashmi",
              bg_image: "https://miro.medium.com/max/10944/0*KgokkHfmzydIssRB",
              blog_author_profile_photo:
                "https://miro.medium.com/fit/c/96/96/1*Wh9U2vfKSMypfDGRO53B0w.jpeg",
            },
            {
              blog_title: "What is Cloud Computing",
              blog_url:
                "https://medium.com/muacm/what-is-cloud-computing-a2117d18b30a",
              blog_author: "Samarth Sharma",
              bg_image:
                "https://miro.medium.com/max/10000/1*xHvBNPs8DeBlr2bObcwUkA.jpeg",
              blog_author_profile_photo:
                "https://miro.medium.com/fit/c/96/96/1*eAJCemISm98Ek7K8gdLjOQ.jpeg",
            },
          ],
        },
        Q =
          (a(46),
          function (e) {
            var t = e.BlogCard_Details;
            return Object(b.jsxs)("div", {
              className: "BlogCard",
              children: [
                Object(b.jsx)("img", {
                  src: t.bg_image,
                  alt: "blog_demo_image",
                  className: "blog_demo_image",
                }),
                Object(b.jsx)("h3", { children: t.blog_title }),
                Object(b.jsxs)("span", {
                  children: [
                    Object(b.jsx)("img", {
                      src: t.blog_author_profile_photo,
                      alt: "author-profile",
                      className: "author_profile_image",
                    }),
                    Object(b.jsxs)("p", { children: ["By, ", t.blog_author] }),
                  ],
                }),
                Object(b.jsx)("a", {
                  href: t.blog_url,
                  target: "_blank",
                  children: Object(b.jsx)("button", {
                    className: "primaryButton",
                    children: "Read Blog",
                  }),
                }),
              ],
            });
          }),
        Z = function () {
          var e = Object(i.useState)(Y.Blogs),
            t = Object(l.a)(e, 1)[0];
          return Object(b.jsxs)("div", {
            className: "Blogs",
            children: [
              Object(b.jsx)("h2", { children: "Blogs" }),
              Object(b.jsx)("div", {
                className: "blog-card-container",
                children: t.map(function (e, t) {
                  return Object(b.jsx)(Q, { BlogCard_Details: e });
                }),
              }),
            ],
          });
        },
        X = function () {
          return Object(b.jsx)("div", {
            className: "App",
            children: Object(b.jsxs)(c.a, {
              children: [
                Object(b.jsx)(o.a, { path: "/", exact: !0, component: x }),
                Object(b.jsx)(o.a, { path: "/home", exact: !0, component: x }),
                Object(b.jsx)(o.a, { path: "/team", exact: !0, component: K }),
                Object(b.jsx)(o.a, {
                  path: "/events",
                  exact: !0,
                  component: P,
                }),
                Object(b.jsx)(o.a, { path: "/blog", exact: !0, component: Z }),
              ],
            }),
          });
        },
        $ = (a(53), a.p + "static/media/logo.c41e1c34.png"),
        ee = function () {
          var e = Object(i.useState)(!1),
            t = Object(l.a)(e, 2),
            a = t[0],
            n = t[1],
            s = ["header-option-list"];
          return (
            a ? s.push("open-drawer") : s.push("close-drawer"),
            Object(b.jsxs)("div", {
              className: "Header",
              children: [
                Object(b.jsx)("span", {
                  className: "logo-container",
                  children: Object(b.jsx)("a", {
                    href: "/",
                    children: Object(b.jsx)("img", {
                      src: $,
                      className: "logo",
                    }),
                  }),
                }),
                Object(b.jsxs)("div", {
                  onClick: function () {
                    return n(function (e) {
                      return !e;
                    });
                  },
                  className: "header-drawer-btn",
                  children: [
                    Object(b.jsx)("div", {}),
                    Object(b.jsx)("div", {}),
                    Object(b.jsx)("div", {}),
                  ],
                }),
                Object(b.jsxs)("ul", {
                  onClick: function () {
                    return n(function (e) {
                      return !e;
                    });
                  },
                  className: s.join(" "),
                  children: [
                    Object(b.jsx)("li", {
                      className: "header-option",
                      children: Object(b.jsx)("a", {
                        href: "/home#about-muacm",
                        children: "About",
                      }),
                    }),
                    Object(b.jsx)("li", {
                      className: "header-option",
                      children: Object(b.jsx)("a", {
                        href: "/team",
                        children: "Team",
                      }),
                    }),
                    Object(b.jsx)("li", {
                      className: "header-option",
                      children: Object(b.jsx)("a", {
                        href: "/events",
                        children: "Events",
                      }),
                    }),
                    Object(b.jsx)("li", {
                      className: "header-option",
                      children: Object(b.jsx)("a", {
                        href: "/blog",
                        children: "Blog",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        te =
          (a(54),
          function () {
            return Object(b.jsxs)("div", {
              className: "Footer",
              children: [
                Object(b.jsxs)("div", {
                  className: "Footer-UpperLayer",
                  children: [
                    Object(b.jsx)("div", {
                      children: Object(b.jsx)("img", { src: $, alt: "logo" }),
                    }),
                    Object(b.jsxs)("div", {
                      children: [
                        Object(b.jsx)("h3", { children: "Useful Links" }),
                        Object(b.jsxs)("ul", {
                          className: "footer-list",
                          children: [
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              target: "_blank",
                              children: Object(b.jsx)("a", {
                                href: "http://www.medicaps.ac.in/",
                                rel: "noreferrer",
                                children: "Medicaps University",
                              }),
                            }),
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: Object(b.jsx)("a", {
                                href: "https://sticmedicaps.org.in/",
                                rel: "noreferrer",
                                target: "_blank",
                                children: "STIC",
                              }),
                            }),
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: Object(b.jsx)("a", {
                                href: "https://www.acm.org/",
                                rel: "noreferrer",
                                target: "_blank",
                                children: "ACM",
                              }),
                            }),
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: "Terms and Conditions",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(b.jsxs)("div", {
                      id: "footer-icon-layer",
                      children: [
                        Object(b.jsx)("h3", {
                          children: "Social Media Handles",
                        }),
                        Object(b.jsxs)("ul", {
                          className: "footer-list icon",
                          children: [
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: Object(b.jsx)("a", {
                                href: "https://www.linkedin.com/company/acm-student-chapter-medicaps/",
                                rel: "noreferrer",
                                target: "_blank",
                                children: Object(b.jsx)("i", {
                                  className: "fab fa-linkedin",
                                }),
                              }),
                            }),
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: Object(b.jsx)("a", {
                                href: "https://www.instagram.com/muacm",
                                rel: "noreferrer",
                                target: "_blank",
                                children: Object(b.jsx)("i", {
                                  className: "fab fa-instagram",
                                }),
                              }),
                            }),
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: Object(b.jsx)("a", {
                                href: "https://discord.gg/jVxbpUabyR",
                                rel: "noreferrer",
                                target: "_blank",
                                children: Object(b.jsx)("i", {
                                  className: "fab fa-discord",
                                }),
                              }),
                            }),
                            Object(b.jsx)("li", {
                              className: "footer-list-item",
                              children: Object(b.jsx)("a", {
                                href: "https://twitter.com/ACMMedicaps",
                                rel: "noreferrer",
                                target: "_blank",
                                children: Object(b.jsx)("i", {
                                  className: "fab fa-twitter",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(b.jsx)("div", {
                  className: "Footer-LowerLayer",
                  children: Object(b.jsxs)("p", {
                    children: [
                      "Copyright \xa9 2021 ",
                      Object(b.jsx)("a", { href: "/", children: "MUACM" }),
                      " All rights Reserved",
                    ],
                  }),
                }),
              ],
            });
          }),
        ae = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 56))
              .then(function (t) {
                var a = t.getCLS,
                  i = t.getFID,
                  n = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                a(e), i(e), n(e), s(e), r(e);
              });
        };
      r.a.render(
        Object(b.jsxs)(n.a.StrictMode, {
          children: [
            Object(b.jsx)(ee, {}),
            Object(b.jsx)(X, {}),
            Object(b.jsx)(te, {}),
          ],
        }),
        document.getElementById("root")
      ),
        ae();
    },
  },
  [[55, 1, 2]],
]);
//# sourceMappingURL=main.f72eba0c.chunk.js.map
