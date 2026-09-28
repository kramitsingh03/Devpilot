import { useState } from 'react'
import { Send, Bot, User, FileCode } from 'lucide-react'
import { chatMessages } from '../data/mockData.js'

export default function AIAssistant() {
  const [messages, setMessages] = useState(chatMessages)
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((m) => [...m, { role: 'user', text: input }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          title: 'Analysis',
          text: "I've searched the repository for relevant context. Here's a summary based on the indexed files.",
          relatedFiles: ['src/services/authService.ts', 'src/middleware/authMiddleware.ts'],
        },
      ])
    }, 600)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-h-[900px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="pill bg-base-600/60 text-base-50/60">Repository: microsoft/vscode</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-5 pr-1">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
            {m.role === 'assistant' && (
              <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent-light flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
            )}

            <div className={`max-w-[85%] sm:max-w-[70%] ${m.role === 'user' ? 'order-1' : ''}`}>
              {m.role === 'user' ? (
                <div className="bg-accent text-white rounded-xl rounded-tr-sm px-4 py-2.5 text-sm">{m.text}</div>
              ) : (
                <div className="panel p-4">
                  {m.title && <h4 className="font-semibold text-white mb-2 text-sm">{m.title}</h4>}
                  <p className="text-sm text-base-50/70 mb-2">{m.text}</p>
                  {m.steps && (
                    <ol className="text-sm text-base-50/70 space-y-1.5 list-decimal list-inside mb-3">
                      {m.steps.map((s, si) => <li key={si}>{s}</li>)}
                    </ol>
                  )}
                  {m.relatedFiles && (
                    <div className="mt-3 pt-3 border-t border-base-600/40">
                      <p className="text-xs text-base-50/40 mb-1.5">Related files</p>
                      <div className="space-y-1">
                        {m.relatedFiles.map((f) => (
                          <div key={f} className="flex items-center gap-1.5 text-xs text-cyan font-mono">
                            <FileCode size={12} /> {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {m.role === 'user' && (
              <div className="w-8 h-8 rounded-lg bg-base-600 text-base-50/70 flex items-center justify-center shrink-0">
                <User size={16} />
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex items-center gap-2 mt-4 pt-4 border-t border-base-600/40">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your repository..."
          className="input-field flex-1"
        />
        <button type="submit" className="btn-primary shrink-0 px-3.5 py-2.5">
          <Send size={16} />
        </button>
      </form>
    </div>
  )
}
