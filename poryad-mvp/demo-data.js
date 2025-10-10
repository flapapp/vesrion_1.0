// PORU4 Demo Data
// Цей файл містить демонстраційні дані для тестування застосунку

const demoData = {
    // Дані для створювача
    creator: {
        challenges: [
            {
                id: 1,
                title: "Місяць без солодкого",
                duration: 30,
                createdDate: "2024-01-15",
                progress: 25,
                status: "active",
                daysConfigured: 8,
                totalDays: 30
            },
            {
                id: 2,
                title: "Тиждень спорту",
                duration: 7,
                createdDate: "2024-01-01",
                progress: 100,
                status: "completed",
                daysConfigured: 7,
                totalDays: 7
            },
            {
                id: 3,
                title: "21 день читання",
                duration: 21,
                createdDate: "2024-01-10",
                progress: 60,
                status: "active",
                daysConfigured: 15,
                totalDays: 21
            }
        ],
        weeklyPhotos: [
            {
                day: 1,
                photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
                text: "Доброго ранку, кохана! Сьогодні чудовий день!"
            },
            {
                day: 2,
                photo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
                text: "Ти найкраща! Сьогодні все вийде!"
            },
            {
                day: 3,
                photo: "https://images.unsplash.com/photo-1524504388940-b1c172c3db1f?w=400&h=200&fit=crop",
                text: "Третій день - ти справляєшся чудово!"
            },
            {
                day: 4,
                photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=200&fit=crop",
                text: "Вже майже половина тижня! Так тримати!"
            },
            {
                day: 5,
                photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=200&fit=crop",
                text: "П'ятниця! Ти заслуговуєш на нагороду!"
            },
            {
                day: 6,
                photo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
                text: "Субота - час для відпочинку та розваг!"
            },
            {
                day: 7,
                photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
                text: "Неділя - день підсумків. Ти молодець!"
            }
        ],
        analytics: {
            activeChallenges: 2,
            totalDaysConfigured: 30,
            completedDays: 18,
            successRate: 78,
            totalChallenges: 3,
            averageStreak: 5.2
        }
    },

    // Дані для партнера
    partner: {
        currentChallenge: {
            id: 1,
            title: "Місяць без солодкого",
            currentDay: 5,
            totalDays: 30,
            streak: 7,
            todayPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
            todayMessage: "Доброго ранку, кохана! Сьогодні чудовий день для нашого челенджу! 💕",
            todayQuestion: "Скільки солодкого з'їла сьогодні?",
            responseType: "number"
        },
        calendar: {
            days: [
                { day: 1, status: "completed", result: "success" },
                { day: 2, status: "completed", result: "success" },
                { day: 3, status: "completed", result: "success" },
                { day: 4, status: "completed", result: "success" },
                { day: 5, status: "today", result: null },
                { day: 6, status: "available", result: null },
                { day: 7, status: "available", result: null },
                { day: 8, status: "available", result: null },
                { day: 9, status: "available", result: null },
                { day: 10, status: "available", result: null },
                { day: 11, status: "locked", result: null },
                { day: 12, status: "locked", result: null },
                // ... інші дні
            ]
        },
        miniGames: [
            {
                id: 1,
                question: "Де ми познайомилися?",
                options: ["В університеті", "В кафе", "На прогулянці", "Через друзів"],
                correctAnswer: 1,
                completed: false
            },
            {
                id: 2,
                question: "Який твій улюблений колір?",
                options: ["Рожевий", "Синій", "Зелений", "Фіолетовий"],
                correctAnswer: 0,
                completed: true
            },
            {
                id: 3,
                question: "Яка наша улюблена пісня?",
                options: ["Shape of You", "Perfect", "Thinking Out Loud", "Photograph"],
                correctAnswer: 2,
                completed: false
            }
        ],
        countdown: {
            targetDate: "2024-02-14T14:00:00",
            title: "До нашої зустрічі",
            subtitle: "Не можу дочекатися! 💕"
        }
    },

    // Реакції та сюрпризи
    reactions: {
        success: [
            {
                type: "video",
                url: "success_video_1.mp4",
                message: "Ти молодець! Я пишаюсь тобою! 💕"
            },
            {
                type: "audio",
                url: "success_audio_1.mp3",
                message: "Відмінно! Продовжуй в тому ж дусі!"
            },
            {
                type: "text",
                message: "🎉 Супер! Ти справляєшся чудово! 🎉"
            }
        ],
        failure: [
            {
                type: "video",
                url: "failure_video_1.mp4",
                message: "Нічого страшного! Завтра обов'язково вийде!"
            },
            {
                type: "audio",
                url: "failure_audio_1.mp3",
                message: "Не переживай, головне - не здавайся!"
            },
            {
                type: "text",
                message: "💪 Не здавайся! Завтра буде краще! 💪"
            }
        ]
    },

    // Налаштування днів
    daySettings: {
        1: {
            photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
            message: "Перший день! Ти справишся!",
            deliveryTime: "09:00",
            question: "Скільки солодкого з'їла сьогодні?",
            responseType: "number",
            successReaction: "success_video_1.mp4",
            failureReaction: "failure_video_1.mp4",
            additionalSurprises: [
                {
                    time: "14:00",
                    type: "video",
                    url: "check_in_video.mp4",
                    message: "Як справи? Як проходить день?"
                }
            ]
        },
        2: {
            photo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
            message: "Другий день! Ти вже на правильному шляху!",
            deliveryTime: "09:00",
            question: "Скільки солодкого з'їла сьогодні?",
            responseType: "number",
            successReaction: "success_video_1.mp4",
            failureReaction: "failure_video_1.mp4"
        }
        // ... інші дні
    },

    // Користувачі
    users: {
        creator: {
            id: 1,
            name: "Олексій",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            role: "creator"
        },
        partner: {
            id: 2,
            name: "Анна",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            role: "partner"
        }
    },

    // Коди челенджів
    challengeCodes: {
        "ABC123": {
            challengeId: 1,
            creatorId: 1,
            expiresAt: "2024-03-15T23:59:59",
            maxParticipants: 1,
            isActive: true
        },
        "XYZ789": {
            challengeId: 2,
            creatorId: 1,
            expiresAt: "2024-02-01T23:59:59",
            maxParticipants: 1,
            isActive: false
        }
    }
};

// Функції для роботи з демо даними
const demoAPI = {
    // Отримати дані створювача
    getCreatorData() {
        return demoData.creator;
    },

    // Отримати дані партнера
    getPartnerData() {
        return demoData.partner;
    },

    // Отримати налаштування дня
    getDaySettings(day) {
        return demoData.daySettings[day] || null;
    },

    // Отримати реакцію
    getReaction(type, isSuccess) {
        const reactions = isSuccess ? demoData.reactions.success : demoData.reactions.failure;
        return reactions[Math.floor(Math.random() * reactions.length)];
    },

    // Перевірити код челенджу
    validateChallengeCode(code) {
        const challenge = demoData.challengeCodes[code];
        if (!challenge) return null;
        
        if (!challenge.isActive) return { valid: false, message: "Код неактивний" };
        if (new Date() > new Date(challenge.expiresAt)) return { valid: false, message: "Код прострочений" };
        
        return { valid: true, challengeId: challenge.challengeId };
    },

    // Зберегти відповідь партнера
    savePartnerResponse(day, response) {
        // Симуляція збереження в базі даних
        console.log(`Збережено відповідь для дня ${day}:`, response);
        return { success: true, message: "Відповідь збережено" };
    },

    // Оновити прогрес челенджу
    updateChallengeProgress(challengeId, day, completed) {
        // Симуляція оновлення прогресу
        console.log(`Оновлено прогрес челенджу ${challengeId}, день ${day}: ${completed ? 'виконано' : 'не виконано'}`);
        return { success: true };
    },

    // Отримати статистику
    getAnalytics() {
        return demoData.creator.analytics;
    },

    // Отримати міні-ігри
    getMiniGames() {
        return demoData.partner.miniGames;
    },

    // Перевірити відповідь в міні-грі
    checkGameAnswer(gameId, selectedOption) {
        const game = demoData.partner.miniGames.find(g => g.id === gameId);
        if (!game) return { correct: false, message: "Гра не знайдена" };
        
        const isCorrect = game.options[selectedOption] === game.options[game.correctAnswer];
        return { 
            correct: isCorrect, 
            message: isCorrect ? "Правильно! 🎉" : "Спробуй ще раз! 💪",
            correctAnswer: game.correctAnswer
        };
    }
};

// Експорт для використання в HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { demoData, demoAPI };
} else {
    window.demoData = demoData;
    window.demoAPI = demoAPI;
}