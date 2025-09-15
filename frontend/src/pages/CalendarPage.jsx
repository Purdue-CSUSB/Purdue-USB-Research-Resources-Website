
import React from "react";

export default function CalendarPage() {
    const calendarId = '88e0056451d336ea63dbb2cfc2ae5691fb511e40dbcc5e5d79dc6ed439fb7337@group.calendar.google.com'
    const timeZone = 'America%2FIndiana%2FIndianapolis'
    
    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Research <span className="text-green-400">Calendar</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        Stay updated with research events, deadlines, and important dates at Purdue University.
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                    <div className="flex justify-center">
                        <iframe
                            title="Google Calendar"
                            src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=${timeZone}`}
                            style={{ 
                                border: '0', 
                                width: '100%', 
                                height: '600px', 
                                frameborder: '0', 
                                scrolling: 'no',
                                borderRadius: '12px'
                            }}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}