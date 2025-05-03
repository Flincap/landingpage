import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="join" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Africa Stablecoin Network Today
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Be part of shaping the future of finance in Africa. Join our network and gain access to unparalleled resources, connections, and insights.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-blue-200/60"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-blue-200/60"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="text-left">
                <label htmlFor="organization" className="block text-sm font-medium text-blue-100 mb-1">
                  Organization Name*
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-blue-200/60"
                  placeholder="Your organization"
                  required
                />
              </div>
              
              <div className="text-left">
                <label htmlFor="category" className="block text-sm font-medium text-blue-100 mb-1">
                  Member Category*
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white appearance-none"
                  required
                >
                  <option value="" className="bg-blue-900">Select a category</option>
                  <option value="stablecoin_issuer" className="bg-blue-900">Stablecoin Issuer</option>
                  <option value="blockchain_platform" className="bg-blue-900">Blockchain Platform</option>
                  <option value="financial_institution" className="bg-blue-900">Financial Institution/Fintech</option>
                  <option value="policy_stakeholder" className="bg-blue-900">Policy/Regulatory Stakeholder</option>
                  <option value="academic_partner" className="bg-blue-900">Academic/Research Partner</option>
                  <option value="enterprise_ngo" className="bg-blue-900">Enterprise/NGO</option>
                  <option value="affiliate" className="bg-blue-900">Affiliate Member</option>
                </select>
              </div>
            </div>
            
            <div className="text-left">
              <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                How do you hope to contribute to the network? (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-blue-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-blue-200/60"
                placeholder="Share your interests and how you'd like to participate"
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full text-lg font-bold transition-colors flex items-center group"
              >
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <p className="text-blue-200 text-sm mt-6">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;