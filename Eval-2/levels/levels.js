const defaultLogoUrl = "./images/person_running.png";

const beginnerLevels = [
    {
      level: 1,
      icon: defaultLogoUrl,
      name: "Home Row",
      content: "Practice the home row keys (ASDF, JKL;). Build muscle memory for accurate typing by repeatedly pressing these keys in various combinations. This foundational skill is essential for developing your overall typing proficiency."
    },
    {
      level: 2,
      icon: defaultLogoUrl,
      name: "Thumb Space",
      content: "Get used to pressing the spacebar using your thumb. This key is crucial for spacing between words and sentences. Practice various phrases to ensure your thumb movement becomes instinctive, allowing for fluid typing."
    },
    {
      level: 3,
      icon: defaultLogoUrl,
      name: "Single Letters",
      content: "Type each letter from the home row individually, focusing on accuracy. This exercise helps reinforce your familiarity with each key, ensuring that your fingers know exactly where to go without having to look down at the keyboard."
    },
    {
      level: 4,
      icon: defaultLogoUrl,
      name: "Home Combos",
      content: "Type random combinations of home row keys for better control. This will enhance your dexterity and speed as you learn to navigate the keyboard with confidence. Try mixing in a few simple words to test your new skills."
    },
    {
      level: 5,
      icon: defaultLogoUrl,
      name: "Simple Words",
      content: "Type simple words like 'sad' and 'lad' using the home row. This practice reinforces your understanding of how letters connect to form meaningful words, helping you transition smoothly from single letters to full typing."
    },
    {
      level: 6,
      icon: defaultLogoUrl,
      name: "Accuracy",
      content: "Focus on typing accurately without errors. This level emphasizes the importance of precision over speed. Develop a habit of checking your work and gradually build up your confidence in your typing skills."
    },
    {
      level: 7,
      icon: defaultLogoUrl,
      name: "Basic Sentences",
      content: "Type basic sentences using the home row. Start with simple structures and progressively introduce more complex sentences. This will help you practice typing in a more fluid manner, preparing you for more challenging tasks."
    },
    {
      level: 8,
      icon: defaultLogoUrl,
      name: "Short Words",
      content: "Practice typing short, simple words with speed. The focus here is to balance both speed and accuracy, as you work on increasing your typing rate while maintaining a low error count."
    },
    {
      level: 9,
      icon: defaultLogoUrl,
      name: "Home Mastery",
      content: "Master typing all home row keys smoothly. This level is about integrating everything you've learned so far. Aim for a seamless flow as you type, minimizing hesitations."
    },
    {
      level: 10,
      icon: defaultLogoUrl,
      name: "Speed Focus",
      content: "Work on typing faster while maintaining accuracy. Implement timing exercises and gradually increase the difficulty level as you improve. The goal is to type efficiently without sacrificing quality."
    }
];

const intermediateLevels = [
    {
      level: 1,
      icon: defaultLogoUrl,
      name: "Top Row",
      content: "Practice the top row keys (QWERTYUIOP). Familiarity with this row is vital for typing common letters quickly. Try typing out common phrases to help you gain speed and confidence."
    },
    {
      level: 2,
      icon: defaultLogoUrl,
      name: "Bottom Row",
      content: "Get comfortable with the bottom row keys (ZXCVBNM). This row contains essential punctuation and symbols, so practice typing sentences that incorporate these keys."
    },
    {
      level: 3,
      icon: defaultLogoUrl,
      name: "Combos",
      content: "Type words combining top, home, and bottom row keys. This will enhance your ability to transition between different sections of the keyboard fluidly."
    },
    {
      level: 4,
      icon: defaultLogoUrl,
      name: "Short Words",
      content: "Type short words using all three rows. The focus here is to familiarize yourself with the layout of the keyboard as you type words that require you to switch rows often."
    },
    {
      level: 5,
      icon: defaultLogoUrl,
      name: "Punctuation",
      content: "Practice basic punctuation marks (.,?!). This will not only enhance your typing but also help you understand the importance of punctuation in sentence structure."
    },
    {
      level: 6,
      icon: defaultLogoUrl,
      name: "Short Sentences",
      content: "Type short sentences using a mix of all rows. This practice will build your ability to type complete thoughts while ensuring you are comfortable with each key."
    },
    {
      level: 7,
      icon: defaultLogoUrl,
      name: "Common Words",
      content: "Focus on typing high-frequency words. This level helps you build speed, as these words are commonly used in everyday writing, making them essential for fluent typing."
    },
    {
      level: 8,
      icon: defaultLogoUrl,
      name: "Row Switch",
      content: "Practice fast transitions between rows. This exercise is crucial for improving your typing speed as it teaches your fingers to move efficiently across the keyboard."
    },
    {
      level: 9,
      icon: defaultLogoUrl,
      name: "Symbols",
      content: "Incorporate symbols (@, #, &). Practice using these keys in context to become familiar with their location and usage in typing."
    },
    {
      level: 10,
      icon: defaultLogoUrl,
      name: "Speed Sentences",
      content: "Type sentences with a focus on speed. Set time limits for yourself and gradually decrease the time as you improve. This will challenge your typing speed without sacrificing accuracy."
    }
];

const advancedLevels = [
    {
      level: 1,
      icon: defaultLogoUrl,
      name: "Symbols & Numbers",
      content: "Practice typing symbols and numbers (123... +@). This level prepares you for real-world typing situations where these characters are often used."
    },
    {
      level: 2,
      icon: defaultLogoUrl,
      name: "Advanced Words",
      content: "Type complex words with mixed rows. This will challenge your typing ability and enhance your cognitive recognition of letter placements."
    },
    {
      level: 3,
      icon: defaultLogoUrl,
      name: "Long Sentences",
      content: "Type longer sentences to build endurance. This practice is essential for enhancing your typing stamina, allowing you to type for extended periods without fatigue."
    },
    {
      level: 4,
      icon: defaultLogoUrl,
      name: "Paragraphs",
      content: "Type full paragraphs focusing on consistency. This will help you learn to maintain rhythm and flow, essential skills for professional typing."
    },
    {
      level: 5,
      icon: defaultLogoUrl,
      name: "Timed Test",
      content: "Complete a timed typing test for speed and accuracy. Use this exercise to assess your progress and set new goals for improvement."
    },
    {
      level: 6,
      icon: defaultLogoUrl,
      name: "Accurate Speed",
      content: "Work on typing fast with high accuracy. This balance is crucial for effective communication and documentation in any professional setting."
    },
    {
      level: 7,
      icon: defaultLogoUrl,
      name: "Endurance",
      content: "Type extended text without losing focus or speed. This skill is important for lengthy tasks, such as writing reports or essays."
    },
    {
      level: 8,
      icon: defaultLogoUrl,
      name: "Advanced Punctuation",
      content: "Incorporate complex punctuation (colon, semicolon). This level is vital for those writing in academic or professional contexts where precise punctuation is necessary."
    },
    {
      level: 9,
      icon: defaultLogoUrl,
      name: "Real World Texts",
      content: "Type real-world documents to simulate practical typing. This includes emails, articles, or reports, which will help you prepare for actual writing tasks."
    },
    {
      level: 10,
      icon: defaultLogoUrl,
      name: "Master Test",
      content: "Complete a final, comprehensive typing test. This test will evaluate everything you've learned and provide a benchmark for your skills."
    }
];

export { beginnerLevels, intermediateLevels, advancedLevels };
