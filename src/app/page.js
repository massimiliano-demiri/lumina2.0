"use client";

import React from "react";
import ParticlesComponent from "./ParticleComponents";
import AnimatedText from "./AnimatedText";
import ParallaxEffect from "./ParallaxEffect";
import { Button, Typography, Box, IconButton, Link } from "@mui/material";
import { useRouter } from "next/navigation"; // Importa useRouter per il routing
import GitHubIcon from "@mui/icons-material/GitHub"; // Icona GitHub
import CoffeeIcon from "@mui/icons-material/Coffee"; // Icona per BuyMeACoffee (puoi usare un'icona simile)

export default function Home() {
  const router = useRouter(); // Inizializza il router

  // Funzione che viene chiamata quando si clicca "Inizia a esplorare"
  const handleExploreClick = () => {
    router.push("/selectGenre"); // Fai il push al componente di selezione del genere
  };

  return (
    <ParallaxEffect>
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden", // Impedisce lo scorrimento
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Distribuisce lo spazio tra gli elementi
          flexDirection: "column",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Particelle animate */}
        <ParticlesComponent />

        {/* Contenuto principale centrato */}
        <Box
          sx={{
            zIndex: 1,
            color: "#fff",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            width: "100%",
            flex: 1, // Occupa lo spazio disponibile tra il footer e la parte superiore
            transform: "translate(var(--parallax-x), var(--parallax-y))",
            transition: "transform 0.1s ease-out",
            marginBottom: "20px", // Aggiunto margine per dare più spazio al footer
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "16px",
              letterSpacing: "0.05em",
            }}
          >
            Benvenuto in Lumina
          </Typography>

          <AnimatedText />

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "18px",
              color: "#ccc",
              marginBottom: "40px",
              maxWidth: "600px",
              lineHeight: "1.5",
            }}
          >
            I frammenti del tempo nascondono storie mai narrate. Quale sarà la
            tua?
          </Typography>

          {/* Pulsante per iniziare l'esplorazione */}
          <Button
            variant="contained"
            size="large"
            onClick={handleExploreClick} // Chiama la funzione al click
            sx={{
              backgroundColor: "#90caf9",
              color: "#121212",
              padding: "14px 36px",
              fontSize: "16px",
              borderRadius: "30px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#5a9bd4",
              },
            }}
          >
            Inizia a esplorare
          </Button>
        </Box>

        {/* Footer con nome e icone */}
        <Box
          sx={{
            zIndex: 1,
            paddingBottom: "10px", // Ridotto per avvicinare il footer
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px", // Ridotto lo spazio tra gli elementi del footer
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#888" }}>
            by Massimiliano Demiri
          </Typography>
          <Box sx={{ display: "flex", gap: "12px" }}>
            {/* Icona GitHub */}
            <IconButton
              component={Link}
              href="https://github.com/massimiliano-demiri"
              target="_blank"
              sx={{ color: "#fff", "&:hover": { color: "#90caf9" } }}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>

            {/* Icona BuyMeACoffee */}
            <IconButton
              component={Link}
              href="https://buymeacoffee.com/massimiliaf"
              target="_blank"
              sx={{ color: "#fff", "&:hover": { color: "#FFDD00" } }}
            >
              <CoffeeIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </div>
    </ParallaxEffect>
  );
}
