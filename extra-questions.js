(function () {
  const extraQuestionsByUnit = {
    "unit-1": [
      {
        id: "q146",
        number: 146,
        text: "Which code standard is commonly used to represent characters from many world languages?",
        options: ["ASCII", "Unicode", "BCD", "EBCDIC"],
        answer: 1,
        note: "Unicode is important because it supports many scripts and languages, unlike basic ASCII."
      },
      {
        id: "q147",
        number: 147,
        text: "Which of the following is an example of physical security for IT infrastructure?",
        options: ["Firewall rule", "Strong password", "Locked server room", "Antivirus update"],
        answer: 2,
        note: "Physical security protects equipment and access to hardware locations."
      },
      {
        id: "q148",
        number: 148,
        text: "Which attack attempts to make a service unavailable by flooding it with traffic?",
        options: ["DDoS", "Phishing", "SQL JOIN", "Defragmentation"],
        answer: 0,
        note: "Distributed Denial of Service attacks are explicitly listed in the syllabus security threats."
      },
      {
        id: "q149",
        number: 149,
        text: "Which multimedia element is made of a sequence of still images displayed rapidly?",
        options: ["Font", "Animation", "Spreadsheet", "Database index"],
        answer: 1,
        note: "Animation is a likely multimedia topic because multimedia is named in Unit 1."
      },
      {
        id: "q150",
        number: 150,
        text: "A register is best described as:",
        options: ["Permanent optical storage", "Very small high-speed storage inside CPU", "A type of printer", "A network cable"],
        answer: 1,
        note: "Registers are among the fastest CPU storage elements."
      }
    ],
    "unit-2": [
      {
        id: "q151",
        number: 151,
        text: "Which motherboard component helps different parts of the motherboard communicate?",
        options: ["Chipset", "Plotter", "Toner", "Trackball"],
        answer: 0,
        note: "Motherboard components such as chipsets, jumpers, slots and sockets are in the official syllabus."
      },
      {
        id: "q152",
        number: 152,
        text: "Which slot is commonly used for installing a modern graphics card?",
        options: ["PCI Express", "RJ11", "SATA power", "VGA"],
        answer: 0,
        note: "Expansion cards are a hardware maintenance topic."
      },
      {
        id: "q153",
        number: 153,
        text: "Which tool is used to check whether a LAN cable is wired correctly?",
        options: ["Cable tester", "Multimeter only", "Formatter", "Disk cleaner"],
        answer: 0,
        note: "Network cabling and cable testing are named in the syllabus."
      },
      {
        id: "q154",
        number: 154,
        text: "If a printer is powered on but does not print from one computer, the first likely area to check is:",
        options: ["Printer driver and connection", "BIOS password", "CPU cache", "Monitor brightness"],
        answer: 0,
        note: "Peripheral troubleshooting often starts with connection, driver, queue and power checks."
      },
      {
        id: "q155",
        number: 155,
        text: "Which connector is mainly used for telephone lines?",
        options: ["RJ45", "RJ11", "HDMI", "BNC"],
        answer: 1,
        note: "RJ45 is LAN; RJ11 is telephone."
      }
    ],
    "unit-3": [
      {
        id: "q156",
        number: 156,
        text: "Which disk scheduling algorithm services the request closest to the current head position first?",
        options: ["FCFS", "SSTF", "Round Robin", "FIFO page replacement"],
        answer: 1,
        note: "Disk scheduling methods are explicitly in Unit 3."
      },
      {
        id: "q157",
        number: 157,
        text: "Which concept allows multiple threads or processes to appear to run at the same time?",
        options: ["Concurrency", "Formatting", "Fragmentation only", "Spooling only"],
        answer: 0,
        note: "Processes, threads, concurrency and synchronization are important OS topics."
      },
      {
        id: "q158",
        number: 158,
        text: "In Windows, which tool is commonly used to manage disk partitions?",
        options: ["Disk Management", "Notepad", "Paint", "Task Scheduler only"],
        answer: 0,
        note: "Managing disks and partitions is listed in the syllabus."
      },
      {
        id: "q159",
        number: 159,
        text: "Which Linux permission gives the ability to execute a file?",
        options: ["r", "w", "x", "d"],
        answer: 2,
        note: "Users, groups and permissions are likely OS questions."
      },
      {
        id: "q160",
        number: 160,
        text: "A backup is mainly used to:",
        options: ["Increase CPU clock speed", "Recover data after loss or failure", "Convert RAM to ROM", "Remove the need for passwords"],
        answer: 1,
        note: "Installation, backup and recovery are official OS topics."
      },
      {
        id: "q161",
        number: 161,
        text: "Which of the following is a common OS security threat?",
        options: ["Privilege escalation", "Mail merge", "Cell formatting", "Slide transition"],
        answer: 0,
        note: "OS security threats are part of Unit 3."
      }
    ],
    "unit-4": [
      {
        id: "q162",
        number: 162,
        text: "Which command is used to query DNS records from the command line?",
        options: ["NSLOOKUP", "FORMAT", "ATTRIB", "TREE"],
        answer: 0,
        note: "The syllabus names IPCONFIG, PING, TRACERT and NSLOOKUP."
      },
      {
        id: "q163",
        number: 163,
        text: "Which device is commonly used to connect wireless devices to a wired network?",
        options: ["Access point", "Scanner", "Projector", "Plotter"],
        answer: 0,
        note: "Access points and Wi-Fi devices are listed under network devices."
      },
      {
        id: "q164",
        number: 164,
        text: "A subnet mask is used to determine:",
        options: ["Network and host portions of an IP address", "Printer toner level", "CPU generation", "File extension"],
        answer: 0,
        note: "Subnet mask, gateway, DNS and static/automatic addressing are high-yield."
      },
      {
        id: "q165",
        number: 165,
        text: "Which technique allows multiple signals to share one communication channel?",
        options: ["Multiplexing", "Normalization", "Encapsulation in OOP", "Defragmentation"],
        answer: 0,
        note: "Multiplexing and multiple access techniques are in Unit 4."
      },
      {
        id: "q166",
        number: 166,
        text: "Packet switching is mainly associated with:",
        options: ["Dividing data into packets and routing them independently", "Printing documents in order", "Storing data only on tape", "Converting AC to DC"],
        answer: 0,
        note: "Switching techniques are named in the network syllabus."
      },
      {
        id: "q167",
        number: 167,
        text: "Which of the following is a valid private IPv4 address range?",
        options: ["10.0.0.0 to 10.255.255.255", "11.0.0.0 to 11.255.255.255", "127.0.0.0 to 127.255.255.255", "169.254.0.0 to 169.254.255.255 only"],
        answer: 0,
        note: "Private IPv4 ranges are common networking MCQ traps."
      },
      {
        id: "q168",
        number: 168,
        text: "A network layer firewall commonly works as a:",
        options: ["Packet filter", "Frame designer", "Virus signature only", "Content writer"],
        answer: 0,
        note: "This matches the official sample-question style."
      }
    ],
    "unit-6": [
      {
        id: "q169",
        number: 169,
        text: "Which method is commonly used to simplify Boolean expressions?",
        options: ["K-map", "HTML table", "SQL JOIN", "Disk formatting"],
        answer: 0,
        note: "K-map, minterms, maxterms, SOP and POS are in Digital Logic."
      },
      {
        id: "q170",
        number: 170,
        text: "In Boolean algebra, SOP stands for:",
        options: ["Sum of Products", "System of Processing", "Set of Programs", "Sequence of Packets"],
        answer: 0,
        note: "SOP/POS are direct syllabus terms."
      },
      {
        id: "q171",
        number: 171,
        text: "Which circuit adds two binary bits and produces sum and carry?",
        options: ["Half adder", "Decoder only", "Multiplexer only", "Comparator only"],
        answer: 0,
        note: "Adders and subtractors are named in the syllabus."
      },
      {
        id: "q172",
        number: 172,
        text: "A decoder converts:",
        options: ["Binary input into one of many output lines", "AC into DC", "HTML into CSS", "Analog sound into paper"],
        answer: 0,
        note: "Encoders and decoders are common digital logic questions."
      },
      {
        id: "q173",
        number: 173,
        text: "Which flip-flop toggles its output when T = 1?",
        options: ["T flip-flop", "D flip-flop", "SR flip-flop only", "Master clock"],
        answer: 0,
        note: "Flip-flop behavior is important for both MCQ and practical/subjective exams."
      },
      {
        id: "q174",
        number: 174,
        text: "A comparator circuit is used to:",
        options: ["Compare binary numbers", "Compress video", "Assign IP addresses", "Create database tables"],
        answer: 0,
        note: "Comparators are explicitly listed under data processing circuits."
      }
    ],
    "unit-8": [
      {
        id: "q175",
        number: 175,
        text: "ADT stands for:",
        options: ["Abstract Data Type", "Automatic Data Transfer", "Advanced Disk Tool", "Applied Digital Table"],
        answer: 0,
        note: "Algorithms, flowcharts, data types and ADT are named in Unit 8."
      },
      {
        id: "q176",
        number: 176,
        text: "Which flowchart symbol is commonly used for input/output?",
        options: ["Parallelogram", "Diamond", "Circle only", "Hexagon"],
        answer: 0,
        note: "Flowchart symbols are simple but very exam-friendly."
      },
      {
        id: "q177",
        number: 177,
        text: "Which programming structure repeats a block of code while a condition is true?",
        options: ["Loop", "Class only", "Constant", "Comment"],
        answer: 0,
        note: "Control structures are a core programming topic."
      },
      {
        id: "q178",
        number: 178,
        text: "Which OOP concept hides implementation details and shows only essential features?",
        options: ["Abstraction", "Compilation", "Indexing", "Subnetting"],
        answer: 0,
        note: "Do not confuse abstraction with encapsulation; both are common MCQ options."
      }
    ],
    "unit-9": [
      {
        id: "q179",
        number: 179,
        text: "Which HTML tag is commonly used to insert an image?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: 0,
        note: "HTML tags for text, hyperlinks, images, lists, forms and tables are in the syllabus."
      },
      {
        id: "q180",
        number: 180,
        text: "Which HTML tag creates a table row?",
        options: ["<tr>", "<td>", "<table-row>", "<row>"],
        answer: 0,
        note: "Tables are specifically mentioned in web technology."
      },
      {
        id: "q181",
        number: 181,
        text: "Which CSS property changes text color?",
        options: ["color", "font-file", "paint", "text-image"],
        answer: 0,
        note: "Basic CSS properties are likely enough for MCQ level."
      },
      {
        id: "q182",
        number: 182,
        text: "A web server is mainly responsible for:",
        options: ["Serving web pages to clients", "Cooling the processor", "Creating RAM chips", "Encrypting every local file automatically"],
        answer: 0,
        note: "Web server and proxy server concepts are listed in Unit 9."
      }
    ],
    "unit-10": [
      {
        id: "q183",
        number: 183,
        text: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF only"],
        answer: 1,
        note: "1NF, 2NF, 3NF and BCNF are in the official syllabus."
      },
      {
        id: "q184",
        number: 184,
        text: "BCNF is a stronger version of:",
        options: ["3NF", "1NF", "Unnormalized form", "File extension"],
        answer: 0,
        note: "BCNF is often asked as a conceptual normalization question."
      },
      {
        id: "q185",
        number: 185,
        text: "Which SQL command is used to change the structure of an existing table?",
        options: ["ALTER", "SELECT", "JOIN", "COMMIT only"],
        answer: 0,
        note: "Creating, modifying and deleting database objects are likely SQL MCQs."
      },
      {
        id: "q186",
        number: 186,
        text: "An index in a database is mainly used to:",
        options: ["Speed up searching and retrieval", "Display images only", "Replace primary keys", "Delete all duplicate tables automatically"],
        answer: 0,
        note: "Tables, fields, records, relationships and indexing are named topics."
      },
      {
        id: "q187",
        number: 187,
        text: "Which SQL clause is used to sort query results?",
        options: ["ORDER BY", "WHERE", "FROM", "HAVING only"],
        answer: 0,
        note: "SELECT, WHERE, GROUP BY, ORDER BY and JOIN should be automatic."
      },
      {
        id: "q188",
        number: 188,
        text: "A report in a database application is mainly used to:",
        options: ["Present formatted output from data", "Physically repair hard disks", "Assign IP addresses", "Compile Java code"],
        answer: 0,
        note: "Forms and reports are named in the DBMS syllabus."
      }
    ],
    "unit-11": [
      {
        id: "q189",
        number: 189,
        text: "SRS stands for:",
        options: ["Software Requirements Specification", "System Recovery Storage", "Simple Router Switch", "Structured Report Sheet"],
        answer: 0,
        note: "Requirement analysis and specification are software engineering topics."
      },
      {
        id: "q190",
        number: 190,
        text: "Which testing checks whether combined modules work together correctly?",
        options: ["Integration testing", "Unit testing", "Alpha sorting", "Disk testing"],
        answer: 0,
        note: "Testing levels are common software engineering MCQs."
      },
      {
        id: "q191",
        number: 191,
        text: "Software maintenance is performed:",
        options: ["After deployment to fix, improve or adapt software", "Only before coding starts", "Only during hardware purchase", "Only to delete software"],
        answer: 0,
        note: "Testing and maintenance are listed directly in the syllabus."
      }
    ],
    "unit-12": [
      {
        id: "q192",
        number: 192,
        text: "Container technology is mainly used to:",
        options: ["Package an application with its dependencies", "Increase monitor brightness", "Replace all networking hardware", "Convert SQL into HTML"],
        answer: 0,
        note: "Virtual machines and container technologies are in Unit 12."
      },
      {
        id: "q193",
        number: 193,
        text: "SDN stands for:",
        options: ["Software Defined Networking", "Secure Digital Number", "System Data Node", "Structured Design Notation"],
        answer: 0,
        note: "SDN is explicitly included in the emerging technologies unit."
      },
      {
        id: "q194",
        number: 194,
        text: "A smart contract is most closely related to:",
        options: ["Blockchain", "CRT monitor", "Magnetic tape", "Printer spooler"],
        answer: 0,
        note: "Blockchain and smart contracts are named in Unit 12."
      },
      {
        id: "q195",
        number: 195,
        text: "In GIS, raster data is commonly represented as:",
        options: ["Grid cells or pixels", "Only linked lists", "SQL tables only", "Executable files"],
        answer: 0,
        note: "Raster and vector GIS formats are official syllabus terms."
      },
      {
        id: "q196",
        number: 196,
        text: "In GIS, vector data commonly represents features using:",
        options: ["Points, lines and polygons", "Only audio samples", "Only binary gates", "Only HTML tags"],
        answer: 0,
        note: "GIS vector/raster is a high-possibility gap area."
      },
      {
        id: "q197",
        number: 197,
        text: "A virtual machine is:",
        options: ["Software-based emulation of a computer system", "A physical keyboard", "A type of barcode", "A network cable tester"],
        answer: 0,
        note: "Virtualization is a direct syllabus topic."
      }
    ],
    "unit-13": [
      {
        id: "q198",
        number: 198,
        text: "The Electronic Transaction Act of Nepal mainly deals with:",
        options: ["Electronic records, digital signatures and cyber-related provisions", "Only road traffic rules", "Only forest protection", "Only banking interest rates"],
        answer: 0,
        note: "ETA 2063 is one of the two named laws in Unit 13."
      },
      {
        id: "q199",
        number: 199,
        text: "ICT Policy of Nepal 2072 is related to:",
        options: ["Development and governance of information and communication technology", "Only police uniform rules", "Only vehicle registration", "Only land measurement"],
        answer: 0,
        note: "ICT Policy 2072 is explicitly listed in the syllabus."
      }
    ],
    "unit-14": [
      {
        id: "q200",
        number: 200,
        text: "SAARC stands for:",
        options: ["South Asian Association for Regional Cooperation", "South Asian Army Reserve Council", "Security Agency for Asian Regional Crime", "Social Authority for Asian Research Council"],
        answer: 0,
        note: "SAARC is named in the general knowledge section of the syllabus."
      },
      {
        id: "q201",
        number: 201,
        text: "INTERPOL is mainly related to:",
        options: ["International police cooperation", "Weather forecasting", "Bank interest regulation", "University admission"],
        answer: 0,
        note: "INTERPOL is listed under the Nepal Police service/general knowledge topics."
      },
      {
        id: "q202",
        number: 202,
        text: "Nepal Police is under which ministry?",
        options: ["Ministry of Home Affairs", "Ministry of Finance", "Ministry of Education", "Ministry of Foreign Affairs"],
        answer: 0,
        note: "Basic Nepal Police service structure is a likely GK/service question."
      }
    ]
  };

  Object.entries(extraQuestionsByUnit).forEach(([unitId, questions]) => {
    const unit = window.QUIZ_DATA.units.find((item) => item.id === unitId);
    if (unit) {
      unit.questions.push(...questions);
    }
  });
})();
