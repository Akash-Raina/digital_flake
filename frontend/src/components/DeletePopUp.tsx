import icon from "../assets/DeleteIcon.png"
interface DeletePopupProps {
    show: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    type: string
  }
  
  export const DeletePopUp = ({show, onConfirm, onCancel, type}: DeletePopupProps) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="flex justify-center items-center gap-3">
            <img src={icon} alt="!" className="h-6 w-6"/>
            <span className="font-bold text-lg">{type}</span>
          </div>
          <h3 className="text-md  mb-4 text-[#8f8f8f]">Are you sure you want to {type}?</h3>
          <div className="flex justify-center gap-3">
            <button
              onClick={onCancel}
              className="w-28  h-10 bg-white text-[#767676] border-[#767676] border py-2 px-4 rounded-full hover:bg-gray-100"
            >
              No
            </button>

            <button
              onClick={onConfirm}
              className="w-28 h-10 bg-[#662671] text-white py-2 px-4 rounded-full mr-2 hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  