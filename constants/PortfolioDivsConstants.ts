import { ComponetIcon } from "@components/divs/home/thirdSession/portfolio/portfolioDiv/HomePortfolioDivInterface";

export const portfolioEsquerda = {
   colorDiv: {
      bgColors: [
         "#38b6ff",
         "#173679",
         "#4888C8",
         "#7FC5DC",
         "#E8E163",
         "#DB901C",
      ],
      size: { widthAndHeight: "m-2 aspect-square w-[30%]" },
   },
   magiPass: {
      picture: {
         pictureUrl: "magipass",
         routeOrSiteUrl: "https://www.magipass.com/en",
         style: " bottom-full rounded-t-2xl -mb-[1px]",
      },
      size: {
         widthAndHeight:
            "max-h-[110px] sm:max-h-none w-full aspect-video flex-1",
      },
      title: "Magipass",
      icons: ["dotnet", "tailwind", "react", "next"] as ComponetIcon[],
   },
   saideira: {
      picture: {
         pictureUrl: "saideira",
         routeOrSiteUrl: "https://saideiraclube.com.br/web",
      },
      size: {
         widthAndHeight: "w-[70%] aspect-[4/1.8]",
      },
      title: "Saideira",
      icons: ["dotnet", "tailwind", "react", "next"] as ComponetIcon[],
   },
   leao: {
      bgImage:
         "https://plus.unsplash.com/premium_vector-1750415049468-dbc4316505fc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: { widthAndHeight: "flex-1" },
   },
   buracoNegro: {
      bgImage:
         "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Y5N2VqbjdiaHduZTlqM2g0Y2RkMzVmd213b2VteWkwa3k2ajlodiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xd7QqFPv4IVAz8dnog/giphy.gif",
      size: {
         widthAndHeight: "flex-1",
      },
   },
};

export const portfolioMeio = {
   onebridge: {
      picture: {
         pictureUrl: "onebridge",
         routeOrSiteUrl: "https://hub.onebridgestalwart.com/sign-in",
      },
      title: "Onebridge",
      icons: ["next", "tailwind", "react", "claude"] as ComponetIcon[],
      size: { widthAndHeight: "flex-1" },
   },
   nasa: {
      picture: {
         pictureUrl: "nasa",
         routeOrSiteUrl: "",
         style: " bottom-full rounded-t-2xl -mb-[1px]",
      },
      size: {
         widthAndHeight:
            "max-h-[250px] sm:max-h-none w-full aspect-video sm:flex-1",
      },
      title: "APOD",
      icons: ["dotnet", "tailwind", "react", "next"] as ComponetIcon[],
   },
   gif: {
      bgImage:
         "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDNpNGtlZXRoY29hZHd3cTl5ejBzYm9pMGt3Z2llY3ZxZThvOW9yOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KVZWZQoS0yqfIiTAKq/giphy.gif",
      size: {
         widthAndHeight: "w-[20%] sm:w-[25%] aspect-[1/2.2]",
      },
   },
};

export const portfolioDireita = {
   artExhibition: {
      picture: {
         pictureUrl: "art-exhibition",
         routeOrSiteUrl: "",
      },
      size: {
         widthAndHeight: "flex-1",
      },
      icons: ["dotnet", "tailwind", "react", "next"] as ComponetIcon[],
   },
   noiteEstrelada: {
      bgImage:
         "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VqajZzdm1nN3R2N211Z29zdTE3a2k2eG1rNnd4NnQwODM4cWdnYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LbBSU26sSRAE8/giphy.gif",
      size: {
         widthAndHeight: "flex-1",
      },
   },
   niteroi: {
      bgImage:
         "https://images.unsplash.com/photo-1563799744275-a7bbd947b92a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: {
         widthAndHeight: "max-h-[130px] sm:max-h-none w-[26%] aspect-1/2",
      },
   },
};
