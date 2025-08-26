interface PrivacyPopupProps {
  onShowPrivacy: () => void;
}

export default function PrivacyPopup({ onShowPrivacy }: PrivacyPopupProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[1000] p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center">
          <p className="text-[#333333] text-sm">
            We Value Your Privacy. Click
            <button
              onClick={onShowPrivacy}
              className="text-[#4b5320] hover:text-[#3b4220] underline ml-1"
            >
              here
            </button>{" "}
            to learn more about our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
