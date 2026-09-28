import { user } from '../data/mockData.js'

export default function Settings() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="card">
        <h3 className="font-semibold text-white mb-4">Profile</h3>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-lg font-bold text-white">
            {user.initials}
          </div>
          <div>
            <p className="text-white font-medium">{user.name}</p>
            <p className="text-sm text-base-50/45">{user.email}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Full name</label>
            <input defaultValue={user.name} className="input-field" />
          </div>
          <div>
            <label className="text-sm font-medium text-base-50/80 mb-1.5 block">Role</label>
            <input defaultValue={user.role} className="input-field" />
          </div>
        </div>
        <button className="btn-primary mt-5">Save Changes</button>
      </div>

      <div className="card">
        <h3 className="font-semibold text-white mb-4">Connected Accounts</h3>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-base-50/70">GitHub</span>
          <span className="pill bg-success/15 text-success">Connected</span>
        </div>
      </div>
    </div>
  )
}
