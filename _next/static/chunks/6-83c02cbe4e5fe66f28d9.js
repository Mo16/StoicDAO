(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6], {
        2878: function (e, u, D) {
            "use strict";
            D.d(u, {
                Z: function () {
                    return l
                }
            });
            var t = D(7294),
                a = D(96),
                r = D(4230),
                s = D(5893);

            function l() {
                var e = (0, t.useRef)(),
                    u = (0, t.useRef)(null),
                    D = (0, t.useRef)(),
                    l = (0, t.useRef)(),
                    n = (0, t.useRef)(),
                    i = (0, r.o)((function (e) {
                        return e.loaded
                    })),
                    o = (0, t.useState)(null),
                    d = o[0],
                    c = o[1];
                return (0, t.useEffect)((function () {
                    i && setTimeout((function () {
                        a.gsap.fromTo(e.current, {
                            y: "-10rem"
                        }, {
                            y: 0,
                            scrollTrigger: {
                                trigger: e.current.parentNode,
                                start: "top bottom",
                                end: "bottom bottom",
                                scrub: !0
                            }
                        })
                    }))
                }), [i]), (0, t.useEffect)((function () {
                    a.gsap.set(n.current, {
                        scale: .5,
                        alpha: 0
                    })
                }), []), (0, t.useEffect)((function () {
                    if (null !== d) return u.current && u.current.kill(), u.current = a.gsap.timeline({
                            paused: !0,
                            defaults: {
                                force3D: !0
                            }
                        }), d ? u.current.set(D.current, {
                            autoAlpha: 1
                        }).to(l.current, {
                            alpha: 1,
                            duration: .5,
                            ease: "power1"
                        }, 0).to(n.current, {
                            scale: 1,
                            alpha: 1,
                            duration: 1.25,
                            ease: "elastic(1, .75)"
                        }, 0).play() : u.current.to(l.current, {
                            alpha: 0,
                            duration: .35,
                            ease: "power2.inOut"
                        }, 0).to(n.current, {
                            scale: .5,
                            alpha: 0,
                            duration: .35,
                            ease: "power2.inOut"
                        }, 0).set(D.current, {
                            autoAlpha: 0
                        }).play(),
                        function () {
                            u.current && u.current.kill()
                        }
                }), [d]), (0, s.jsxs)("footer", {
                    className: "relative overflow-hidden",
                    children: [(0, s.jsxs)("div", {
                        ref: e,
                        className: "bg-pattern px-100 w-full flex flex-col items-center py-150",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col items-center justify-center s:flex-row mb-40",
                            children: [(0, s.jsxs)("a", {
                                href: "https://solanart.io/collections/redpandasquad",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "mx-20 mb-20 text-purple-500 group flex items-center leading-none h-[6.5rem] px-25 bg-white rounded-full relative z-2 before:absolute before:inset-0 before:rounded-full before:shadow-lg transition-transform-colors duration-700 ease-out-expo hover:rotate-[-3deg] hover:scale-[1.05] hover:bg-purple-100 wct",
                                children: ["Buy on Solanart", (0, s.jsx)("img", {
                                    src: "/solanart-logo.png",
                                    alt: "",
                                    className: "ml-10 w-auto h-[3.5rem]"
                                })]
                            }), (0, s.jsxs)("a", {
                                href: "https://www.magiceden.io/marketplace?collection_symbol=red_panda_squad",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "mx-20 mb-20 text-purple-500 group flex items-center leading-none h-[6.5rem] px-25 bg-white rounded-full relative z-2 before:absolute before:inset-0 before:rounded-full before:shadow-lg transition-transform-colors duration-700 ease-out-expo hover:rotate-[-3deg] hover:scale-[1.05] hover:bg-purple-100 wct",
                                children: ["Buy on MagicEden", (0, s.jsx)("img", {
                                    src: "/me-logo.png",
                                    alt: "",
                                    className: "ml-5 w-auto h-[5rem]"
                                })]
                            })]
                        }), (0, s.jsxs)("ul", {
                            className: "flex flex-col s:flex-row text-center items-center text-white justify-center",
                            children: [(0, s.jsx)("li", {
                                className: "mx-15 s:mx-20 mb-15 s:mb-0",
                                children: (0, s.jsxs)("a", {
                                    href: "https://discord.gg/KCekrbsX",
                                    target: "_blank",
                                    className: "flex",
                                    children: ["Discord", (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, s.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("li", {
                                className: "mx-15 s:mx-20 mb-15 s:mb-0",
                                children: (0, s.jsxs)("a", {
                                    href: "https://twitter.com/thestoicdao",
                                    target: "_blank",
                                    className: "flex",
                                    children: ["Twitter", (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, s.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsxs)("p", {
                            className: "text-20 text-purple-300 text-center mt-60",
                            children: ["Copyright 2021 StoicDao. ", (0, s.jsx)("button", {
                                type: "button",
                                onClick: function () {
                                    return window.open("https://www.mochoudhury.me");
                                },
                                className: "text-white",
                                children: "Created by Mo"
                            }), "."]
                        })]
                    }), (0, s.jsxs)("article", {
                        ref: D,
                        className: "invisible fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center px-45",
                        children: [(0, s.jsx)("div", {
                            ref: l,
                            onClick: function () {
                                return c(!1)
                            },
                            className: "absolute inset-0 z-1 bg-black bg-opacity-75 opacity-0"
                        }), (0, s.jsxs)("div", {
                            ref: n,
                            className: "relative z-2 w-full max-w-[125rem] bg-white p-45 rounded-[3rem] text-purple-900 shadow-2xl max-h-[80vh] overflow-y-auto overflow-x-hidden",
                            children: [(0, s.jsx)("button", {
                                type: "button",
                                onClick: function () {
                                    return c(!1)
                                },
                                className: "absolute top-10 right-10 flex items-center justify-center h-[6rem] w-[6rem] bg-red-400 rounded-full transform rotate-45",
                                "aria-label": "Close TOC",
                                children: (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-[2rem] w-[2rem] text-white",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
                                        clipRule: "evenodd"
                                    })
                                })
                            }), (0, s.jsx)("h2", {
                                className: "text-26 text-red-400 mb-10",
                                children: "Terms & Conditions"
                            }), (0, s.jsxs)("div", {
                                className: "txt text-20 s:text-18 mb-20",
                                children: [(0, s.jsx)("p", {
                                    children: "StoicDao is a collection of digital artworks (NFTs) running on the Solana blockchain. This website is only an interface allowing participants to exchange digital collectibles. Users are entirely responsible for the safety and management of their own private Solana wallets and validating all transactions and contracts generated by this website before approval. Furthermore, as the StoicDao smart contract runs on the Solana blockchain, there is no ability to undo, reverse, or restore any transactions."
                                }), (0, s.jsx)("p", {
                                    children: "This website and its connected services are provided \u201cas is\u201d and \u201cas available\u201d without warranty of any kind. By using this website you are accepting sole responsibility for any and all transactions involving StoicDao digital collectibles."
                                })]
                            }), (0, s.jsx)("h2", {
                                className: "text-26 text-red-400 mb-10",
                                children: "Ownership"
                            }), (0, s.jsxs)("div", {
                                className: "txt text-20 s:text-18",
                                children: [(0, s.jsx)("p", {
                                    children: "1) You own the NFT. Each StoicDao is an NFT on the Solana blockchain. When you purchase an NFT, you own the underlying StoicDao, the Art, completely. Ownership of the NFT is mediated entirely by the smart contract and the Solana blockchain: at no point may we seize, freeze, or otherwise modify the ownership of any StoicDao."
                                }), (0, s.jsxs)("p", {
                                    children: ["2) ", (0, s.jsx)("strong", {
                                        children: "Personal Use"
                                    }), ". Subject to your continued compliance with these Terms, StoicDao grants you a worldwide, royalty-free license to use, copy, and display the purchased art, along with any extensions that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your StoicDao NFT, provided that the marketplace cryptographically verifies each StoicDao owner\u2019s rights to display the art for their StoicDao to ensure that only the actual owner can display the art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your StoicDao, provided that the website/application cryptographically verifies each StoicDao owner\u2019s rights to display the art for their StoicDao to ensure that only the actual owner can display the art, and provided that the art is no longer visible once the owner of the StoicDao leaves the website/application."]
                                }), (0, s.jsxs)("p", {
                                    children: ["3) ", (0, s.jsx)("strong", {
                                        children: "Commercial Use"
                                    }), ". Subject to your continued compliance with these Terms, StoicDao grants you an unlimited, worldwide license to use, copy, and display the purchased art for the purpose of creating derivative works based upon the art (\u201ccommercial use\u201d). Examples of such commercial use would e.g. be the use of the art to produce and sell merchandise products such as shirts, socks, mugs, stickers, etc displaying copies of the art. For the sake of clarity, nothing in this section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of StoicDao generally, provided that the marketplace cryptographically verifies each StoicDao owner\u2019s rights to display the art for their StoicDao to ensure that only the actual owner can display the art; (ii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of StoicDao generally, provided that the third party website or application cryptographically verifies each StoicDao owner\u2019s rights to display the art for their StoicDao to ensure that only the actual owner can display the art, and provided that the art is no longer visible once the owner of the purchased StoicDao leaves the website/application; or (iii) earning revenue from any of the foregoing."]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        930: function (e, u, D) {
            "use strict";
            D.d(u, {
                Z: function () {
                    return n
                }
            });
            var t = D(7294),
                a = D(7814),
                r = D(1417),
                s = D(96),
                l = D(5893);

            function n() {
                var e = (0, t.useState)(void 0),
                    u = e[0],
                    D = e[1],
                    n = (0, t.useRef)(null),
                    i = (0, t.useRef)(),
                    o = s.gsap.utils.selector(i.current);
                return (0, t.useEffect)((function () {
                    n.current = s.gsap.timeline({
                        paused: !0
                    })
                }), []), (0, t.useEffect)((function () {
                    if (void 0 !== u) {
                        var e = n.current;
                        e.clear(), u ? e.to(i.current, {
                            autoAlpha: 1,
                            duration: .5,
                            ease: "power1"
                        }).fromTo(o(".js-menu-item"), {
                            y: "9rem",
                            alpha: 0
                        }, {
                            y: 0,
                            alpha: 1,
                            duration: 1.5,
                            stagger: .075,
                            ease: "elastic.out(1.5, .75)"
                        }, 0) : e.to(i.current, {
                            autoAlpha: 0,
                            duration: .5,
                            ease: "power1"
                        }), e.restart()
                    }
                }), [u]), (0, l.jsxs)("header", {
                    className: "fixed top-0 left-0 w-full z-10 h-[12.5rem] flex items-center justify-end px-30 s:px-100",
                    children: [(0, l.jsx)("div", {
                        className: "relative flex items-center justify-end z-2",
                        children: (0, l.jsx)("nav", {
                            className: "py-15 px-30 bg-white rounded-full flex items-center shadow-2xl my-20 js-i-head",
                            children: (0, l.jsxs)("ul", {
                                className: "flex items-center text-purple-400",
                                children: [(0, l.jsx)("li", {
                                    className: "mr-30",
                                    children: (0, l.jsxs)("a", {
                                        href: "https://discord.gg/KCekrbsX",
                                        target: "_blank",
                                        className: "flex",
                                        children: ["Discord", (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, l.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "mr-30",
                                    children: (0, l.jsxs)("a", {
                                        href: "https://twitter.com/thestoicdao",
                                        target: "_blank",
                                        className: "flex",
                                        children: ["Twitter", (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, l.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "mr-30",
                                    children: (0, l.jsxs)("a", {
                                        href: "https://linktr.ee/stoicdao?utm_source=linktree_profile_share&ltsid=9301d0fc-739a-4868-91b5-5d43fce98144",
                                        target: "_blank",
                                        className: "flex",
                                        children: ["Linktree", (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, l.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "menu-toggle ".concat(u ? "is-active" : ""),
                                    onClick: function () {
                                        return D(!u)
                                    },
                                    children: (0, l.jsx)("button", {
                                        className: "flex w-[4rem] h-[4rem] items-center",
                                        children: (0, l.jsxs)("div", {
                                            className: "relative h-[0.5rem] w-full",
                                            children: [(0, l.jsx)("span", {
                                                className: "bg-red-400 absolute top-0 left-0 h-full w-full rounded-full"
                                            }), (0, l.jsx)("span", {
                                                className: "bg-red-400 absolute top-0 left-0 h-full w-full rounded-full"
                                            }), (0, l.jsx)("span", {
                                                className: "bg-red-400 absolute top-0 left-0 h-full w-full rounded-full"
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsxs)("aside", {
                        ref: i,
                        className: "invisible fixed top-0 left-0 w-full h-full bg-purple-600 px-30 flex flex-col items-center justify-center z-1",
                        children: [(0, l.jsxs)("ul", {
                            className: "flex flex-col items-center",
                            children: [(0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsxs)("a", {
                                    href: "https://solanart.io/collections/redpandasquad",
                                    target: "_blank",
                                    className: "flex text-30",
                                    children: ["Buy on Solanart", (0, l.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsxs)("a", {
                                    href: "https://www.magiceden.io/marketplace?collection_symbol=red_panda_squad",
                                    target: "_blank",
                                    className: "flex text-30",
                                    children: ["Buy on MagicEden", (0, l.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("li", {
                                className: "hidden s:block mb-15 js-menu-item",
                                children: (0, l.jsxs)("a", {
                                    href: "/rarities.pdf",
                                    target: "_blank",
                                    className: "flex text-30",
                                    children: ["Rarities", (0, l.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-[2.25rem] w-[2.25rem] transform rotate-45",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsx)("a", {
                                    href: "#youtube",
                                    className: "flex text-30",
                                    onClick: function () {
                                        return D(!1)
                                    },
                                    children: "RPS Street Art"
                                })
                            }), (0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsx)("a", {
                                    href: "#partners",
                                    className: "flex text-30",
                                    onClick: function () {
                                        return D(!1)
                                    },
                                    children: "Partners"
                                })
                            }), (0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsx)("a", {
                                    href: "#merch",
                                    className: "flex text-30",
                                    onClick: function () {
                                        return D(!1)
                                    },
                                    children: "Merch Store (Preview)"
                                })
                            }), (0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsx)("a", {
                                    href: "#roadmap",
                                    className: "flex text-30",
                                    onClick: function () {
                                        return D(!1)
                                    },
                                    children: "Roadmap"
                                })
                            }), (0, l.jsx)("li", {
                                className: "mb-15 js-menu-item",
                                children: (0, l.jsx)("a", {
                                    href: "#team",
                                    className: "flex text-30",
                                    onClick: function () {
                                        return D(!1)
                                    },
                                    children: "Team"
                                })
                            })]
                        }), (0, l.jsxs)("ul", {
                            className: "flex justify-center items-center pt-30 js-menu-item",
                            children: [(0, l.jsx)("li", {
                                className: "",
                                children: (0, l.jsx)("a", {
                                    href: "https://twitter.com/thestoicdao",
                                    target: "_blank",
                                    className: "flex text-30 mx-15",
                                    children: (0, l.jsx)(a.G, {
                                        icon: r.mdU,
                                        className: "text-red-400"
                                    })
                                })
                            }), (0, l.jsx)("li", {
                                className: "",
                                children: (0, l.jsx)("a", {
                                    href: "https://discord.gg/KCekrbsX",
                                    target: "_blank",
                                    className: "flex text-30 mx-15",
                                    children: (0, l.jsx)(a.G, {
                                        icon: r.omb,
                                        className: "text-red-400"
                                    })
                                })
                            }), (0, l.jsx)("li", {
                                className: "",
                                children: (0, l.jsx)("a", {
                                    href: "https://www.instagram.com/redpandasquad_/",
                                    target: "_blank",
                                    className: "flex text-30 mx-15",
                                    children: (0, l.jsx)(a.G, {
                                        icon: r.Zzi,
                                        className: "text-red-400"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        4820: function (e, u) {
            ! function (e) {
                "use strict";
                var u = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

                function D(e) {
                    var u = e.nodeType,
                        t = "";
                    if (1 === u || 9 === u || 11 === u) {
                        if ("string" === typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) t += D(e)
                    } else if (3 === u || 4 === u) return e.nodeValue;
                    return t
                }
                var t, a, r, s = /(?:\r|\n|\t\t)/g,
                    l = /(?:\s\s+)/g,
                    n = function () {
                        t = document, a = window, r = 1
                    },
                    i = function (e) {
                        return a.getComputedStyle(e)
                    },
                    o = Array.isArray,
                    d = [].slice,
                    c = function (e, u) {
                        var D;
                        return o(e) ? e : "string" === (D = typeof e) && !u && e ? d.call(t.querySelectorAll(e), 0) : e && "object" === D && "length" in e ? d.call(e, 0) : e ? [e] : []
                    },
                    h = function (e) {
                        return "absolute" === e.position || !0 === e.absolute
                    },
                    F = function (e, u) {
                        for (var D, t = u.length; --t > -1;)
                            if (D = u[t], e.substr(0, D.length) === D) return D.length
                    },
                    p = " style='position:relative;display:inline-block;'",
                    C = function (e, u) {
                        void 0 === e && (e = "");
                        var D = ~e.indexOf("++"),
                            t = 1;
                        return D && (e = e.split("++").join("")),
                            function () {
                                return "<" + u + p + (e ? " class='" + e + (D ? t++ : "") + "'>" : ">")
                            }
                    },
                    f = function e(u, D, t) {
                        var a = u.nodeType;
                        if (1 === a || 9 === a || 11 === a)
                            for (u = u.firstChild; u; u = u.nextSibling) e(u, D, t);
                        else 3 !== a && 4 !== a || (u.nodeValue = u.nodeValue.split(D).join(t))
                    },
                    m = function (e, u) {
                        for (var D = u.length; --D > -1;) e.push(u[D])
                    },
                    x = function (e, u, D) {
                        for (var t; e && e !== u;) {
                            if (t = e._next || e.nextSibling) return t.textContent.charAt(0) === D;
                            e = e.parentNode || e._parent
                        }
                    },
                    E = function e(u) {
                        var D, t, a = c(u.childNodes),
                            r = a.length;
                        for (D = 0; D < r; D++)(t = a[D])._isSplit ? e(t) : (D && 3 === t.previousSibling.nodeType ? t.previousSibling.nodeValue += 3 === t.nodeType ? t.nodeValue : t.firstChild.nodeValue : 3 !== t.nodeType && u.insertBefore(t.firstChild, t), u.removeChild(t))
                    },
                    g = function (e, u) {
                        return parseFloat(u[e]) || 0
                    },
                    w = function (e, u, D, a, r, s, l) {
                        var n, o, d, c, F, p, C, w, v, b, y, B, j = i(e),
                            N = g("paddingLeft", j),
                            A = -999,
                            _ = g("borderBottomWidth", j) + g("borderTopWidth", j),
                            R = g("borderLeftWidth", j) + g("borderRightWidth", j),
                            S = g("paddingTop", j) + g("paddingBottom", j),
                            k = g("paddingLeft", j) + g("paddingRight", j),
                            T = .2 * g("fontSize", j),
                            L = j.textAlign,
                            P = [],
                            V = [],
                            z = [],
                            M = u.wordDelimiter || " ",
                            q = u.tag ? u.tag : u.span ? "span" : "div",
                            O = u.type || u.split || "chars,words,lines",
                            W = r && ~O.indexOf("lines") ? [] : null,
                            H = ~O.indexOf("words"),
                            U = ~O.indexOf("chars"),
                            G = h(u),
                            Z = u.linesClass,
                            I = ~(Z || "").indexOf("++"),
                            Y = [];
                        for (I && (Z = Z.split("++").join("")), d = (o = e.getElementsByTagName("*")).length, F = [], n = 0; n < d; n++) F[n] = o[n];
                        if (W || G)
                            for (n = 0; n < d; n++)((p = (c = F[n]).parentNode === e) || G || U && !H) && (B = c.offsetTop, W && p && Math.abs(B - A) > T && ("BR" !== c.nodeName || 0 === n) && (C = [], W.push(C), A = B), G && (c._x = c.offsetLeft, c._y = B, c._w = c.offsetWidth, c._h = c.offsetHeight), W && ((c._isSplit && p || !U && p || H && p || !H && c.parentNode.parentNode === e && !c.parentNode._isSplit) && (C.push(c), c._x -= N, x(c, e, M) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === n) && W.push([])));
                        for (n = 0; n < d; n++) p = (c = F[n]).parentNode === e, "BR" !== c.nodeName ? (G && (v = c.style, H || p || (c._x += c.parentNode._x, c._y += c.parentNode._y), v.left = c._x + "px", v.top = c._y + "px", v.position = "absolute", v.display = "block", v.width = c._w + 1 + "px", v.height = c._h + "px"), !H && U ? c._isSplit ? (c._next = c.nextSibling, c.parentNode.appendChild(c)) : c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && Y.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), F.splice(n--, 1), d--) : p || (B = !c.nextSibling && x(c.parentNode, e, M), c.parentNode._parent && c.parentNode._parent.appendChild(c), B && c.parentNode.appendChild(t.createTextNode(" ")), "span" === q && (c.style.display = "inline"), P.push(c)) : c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? V.push(c) : U && !c._isSplit && ("span" === q && (c.style.display = "inline"), P.push(c))) : W || G ? (c.parentNode && c.parentNode.removeChild(c), F.splice(n--, 1), d--) : H || e.appendChild(c);
                        for (n = Y.length; --n > -1;) Y[n].parentNode.removeChild(Y[n]);
                        if (W) {
                            for (G && (b = t.createElement(q), e.appendChild(b), y = b.offsetWidth + "px", B = b.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(b)), v = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                            for (w = " " === M && (!G || !H && !U), n = 0; n < W.length; n++) {
                                for (C = W[n], (b = t.createElement(q)).style.cssText = "display:block;text-align:" + L + ";position:" + (G ? "absolute;" : "relative;"), Z && (b.className = Z + (I ? n + 1 : "")), z.push(b), d = C.length, o = 0; o < d; o++) "BR" !== C[o].nodeName && (c = C[o], b.appendChild(c), w && c._wordEnd && b.appendChild(t.createTextNode(" ")), G && (0 === o && (b.style.top = c._y + "px", b.style.left = N + B + "px"), c.style.top = "0px", B && (c.style.left = c._x - B + "px")));
                                0 === d ? b.innerHTML = "&nbsp;" : H || U || (E(b), f(b, String.fromCharCode(160), " ")), G && (b.style.width = y, b.style.height = c._h + "px"), e.appendChild(b)
                            }
                            e.style.cssText = v
                        }
                        G && (l > e.clientHeight && (e.style.height = l - S + "px", e.clientHeight < l && (e.style.height = l + _ + "px")), s > e.clientWidth && (e.style.width = s - k + "px", e.clientWidth < s && (e.style.width = s + R + "px"))), m(D, P), H && m(a, V), m(r, z)
                    },
                    v = function (e, a, r, n) {
                        var i, o, d, c, p, C, m, x, E = a.tag ? a.tag : a.span ? "span" : "div",
                            g = ~(a.type || a.split || "chars,words,lines").indexOf("chars"),
                            w = h(a),
                            v = a.wordDelimiter || " ",
                            b = " " !== v ? "" : w ? "&#173; " : " ",
                            y = "</" + E + ">",
                            B = 1,
                            j = a.specialChars ? "function" === typeof a.specialChars ? a.specialChars : F : null,
                            N = t.createElement("div"),
                            A = e.parentNode;
                        for (A.insertBefore(N, e), N.textContent = e.nodeValue, A.removeChild(e), m = -1 !== (i = D(e = N)).indexOf("<"), !1 !== a.reduceWhiteSpace && (i = i.replace(l, " ").replace(s, "")), m && (i = i.split("<").join("{{LT}}")), p = i.length, o = (" " === i.charAt(0) ? b : "") + r(), d = 0; d < p; d++)
                            if (C = i.charAt(d), j && (x = j(i.substr(d), a.specialChars))) C = i.substr(d, x || 1), o += g && " " !== C ? n() + C + "</" + E + ">" : C, d += x - 1;
                            else if (C === v && i.charAt(d - 1) !== v && d) {
                            for (o += B ? y : "", B = 0; i.charAt(d + 1) === v;) o += b, d++;
                            d === p - 1 ? o += b : ")" !== i.charAt(d + 1) && (o += b + r(), B = 1)
                        } else "{" === C && "{{LT}}" === i.substr(d, 6) ? (o += g ? n() + "{{LT}}</" + E + ">" : "{{LT}}", d += 5) : C.charCodeAt(0) >= 55296 && C.charCodeAt(0) <= 56319 || i.charCodeAt(d + 1) >= 65024 && i.charCodeAt(d + 1) <= 65039 ? (c = ((i.substr(d, 12).split(u) || [])[1] || "").length || 2, o += g && " " !== C ? n() + i.substr(d, c) + "</" + E + ">" : i.substr(d, c), d += c - 1) : o += g && " " !== C ? n() + C + "</" + E + ">" : C;
                        e.outerHTML = o + (B ? y : ""), m && f(A, "{{LT}}", "<")
                    },
                    b = function e(u, D, t, a) {
                        var r, s, l = c(u.childNodes),
                            n = l.length,
                            o = h(D);
                        if (3 !== u.nodeType || n > 1) {
                            for (D.absolute = !1, r = 0; r < n; r++)(3 !== (s = l[r]).nodeType || /\S+/.test(s.nodeValue)) && (o && 3 !== s.nodeType && "inline" === i(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, e(s, D, t, a));
                            return D.absolute = o, void(u._isSplit = !0)
                        }
                        v(u, D, t, a)
                    },
                    y = function () {
                        function e(e, u) {
                            r || n(), this.elements = c(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, this.split(u)
                        }
                        var u = e.prototype;
                        return u.split = function (e) {
                            this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                            for (var u, D, t, a = this.elements.length, r = e.tag ? e.tag : e.span ? "span" : "div", s = C(e.wordsClass, r), l = C(e.charsClass, r); --a > -1;) t = this.elements[a], this._originals[a] = t.innerHTML, u = t.clientHeight, D = t.clientWidth, b(t, e, s, l), w(t, e, this.chars, this.words, this.lines, D, u);
                            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                        }, u.revert = function () {
                            var e = this._originals;
                            if (!e) throw "revert() call wasn't scoped properly.";
                            return this.elements.forEach((function (u, D) {
                                return u.innerHTML = e[D]
                            })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                        }, e.create = function (u, D) {
                            return new e(u, D)
                        }, e
                    }();
                y.version = "3.0.0", e.SplitText = y, e.default = y, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(u)
        }
    }
]);