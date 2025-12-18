# AI‑Powered Live Lecture Assistant

## Domain
Human–Computer Interaction (HCI)

---

## 1. Project Overview

The **AI‑Powered Live Lecture Assistant** is an accessibility‑focused classroom solution designed to help **deaf and hard‑of‑hearing students** understand live lectures in real time. The system converts a lecturer’s speech into readable text captions and enables **two‑way classroom interaction** using AI‑based gesture recognition.

Unlike traditional solutions such as human interpreters or recorded lectures, this project provides a **real‑time, scalable, and low‑cost solution** that improves inclusivity for all learners.

---

## 2. Problem Statement

In traditional classrooms, teaching is primarily audio‑based. Deaf and hard‑of‑hearing students face major challenges such as:
- Inability to follow spoken explanations in real time
- Missing important points during fast lectures
- Lack of direct interaction with the lecturer

Existing solutions (interpreters, notes, recordings) are either expensive, delayed, or not interactive. Hence, there is a need for a **real‑time, interactive, technology‑driven solution**.

---

## 3. Proposed Solution

This project proposes a **web‑based AI classroom assistant** that:
1. Converts live lecture speech into **real‑time captions**
2. Detects **student hand‑raise gestures** using computer vision
3. Notifies the lecturer instantly through a **popup alert**

The system follows **Human–Computer Interaction principles** to ensure usability, accessibility, and clarity.

---

## 4. Key Features

- 🎤 Real‑time Speech‑to‑Text (Live Captions)
- ✋ AI‑based Hand Gesture Recognition
- 🔔 Lecturer Notification Popup
- 🎨 Clean, Accessible, Modern UI
- 🌐 Fully Web‑based (No Backend Required)
- 📱 Scalable and Low‑Cost

---

## 5. System Architecture

### High‑Level Flow:

Lecturer Speech  →  Speech Recognition Engine  →  Live Caption Display  
Student Camera  →  Gesture Recognition Model  →  Lecturer Notification


### Architecture Explanation:

- **Frontend Interface**: Displays captions, camera feed, and status
- **Speech Recognition Module**: Uses browser‑based AI to transcribe speech
- **Gesture Recognition Module**: Uses MediaPipe Hands for hand detection
- **Notification System**: Provides real‑time visual alerts to lecturer

All processing happens **on the client side**, ensuring privacy and low latency.

---

## 6. Technology Stack

| Component | Technology |
|---------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Speech Recognition | Web Speech API |
| Gesture Recognition | MediaPipe Hands |
| Camera Access | WebRTC (Browser) |
| Deployment | GitHub Pages |

---

## 7. Design Thinking Approach

### Empathize
Understanding the challenges faced by deaf students in live classrooms.

### Define
Lack of real‑time accessibility and interaction.

### Ideate
AI‑based speech transcription and gesture detection.

### Prototype
Web‑based interactive demo.

### Test
Live classroom scenario with lecturer and student roles.

---

## 8. Two‑Way Classroom Interaction Flow

1. Lecturer starts lecture using **Start Lecture** button
2. Speech is converted into readable captions in real time
3. Student reads captions instead of relying on audio
4. Student raises hand to ask a question
5. System detects gesture using camera
6. Lecturer receives instant popup notification

This completes a **full two‑way communication loop**.

---

## 9. User Interface Design

### Accessibility‑Focused Design:
- Large readable fonts
- High‑contrast color scheme
- Highlighted caption area
- Clear visual feedback for gestures

The UI is optimized for **poster presentation, live demo, and classroom usage**.

---

## 10. Implementation Details

### Speech‑to‑Text
- Triggered only after user interaction (browser security)
- Displays only finalized speech results to avoid confusion
- Line‑by‑line caption flow similar to book reading

### Gesture Recognition
- Uses single‑hand detection
- Optimized confidence thresholds
- Prevents repeated popup spam using state control

---

## 11. Advantages

- Promotes inclusive education
- Helps deaf, slow learners, and non‑native speakers
- No human interpreter required
- Real‑time interaction
- Cost‑effective and scalable

---

## 12. Limitations

- Requires internet connection
- Gesture recognition limited to simple hand raises
- Speech recognition accuracy depends on microphone quality

---

## 13. Future Enhancements

- Full sign language recognition
- Multi‑language caption support
- Student analytics dashboard
- Mobile and tablet optimization
- AR/VR classroom integration

---

## 14. Conclusion

The **AI‑Powered Live Lecture Assistant** successfully demonstrates how **Artificial Intelligence and Human–Computer Interaction** can be combined to solve real‑world accessibility problems. The system improves classroom inclusivity, enables real‑time interaction, and provides a scalable solution suitable for modern education.

This project represents a **complete, practical, and impactful solution**, suitable for academic evaluation, live demonstration, and future expansion.

---

## 15. How to Run the Project

1. Clone the repository
2. Open the project in VS Code
3. Run using Live Server or deploy on GitHub Pages
4. Allow microphone and camera permissions
5. Click **Start Lecture** and begin speaking

---

## 16. Author & Acknowledgement

Developed as part of **Innovation & Design Thinking – Final Year Project**.

Special focus on accessibility, inclusivity, and real‑world usability.

---

> “Technology should not exclude. It should empower.”

