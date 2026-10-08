export const music: string[] = [
    "Pop",
    "Hip-Hop",
    "R&B",
    "EDM",
    "House",
    "Techno",
    "Trance",
    "Dubstep"
  ];
  
  export function printMusic(): void {
    console.log("Party Music:");
    music.forEach((genre) => {
      console.log(genre);
    });
  }
  
  printMusic();
  