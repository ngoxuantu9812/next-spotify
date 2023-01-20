export default function Footer() {
  return (
    <div className="footer flex flex-row bg-gradient-to-r to-purple-700 from-pink-700 py-2 px-3 fixed bottom-0 left-0 right-0">
        <div className="left align-middle text-white basis-2/3">
            <p className="title uppercase text-sm">Xem trước Spotify</p>
            <p className="description">Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên. Không cần thẻ tín dụng.</p>
        </div>
        <div className="right text-right align-middle basis-1/3">
            <button className="bg-white rounded-full px-5 py-2">Đăng ký miễn phí</button>
        </div>
    </div>
    
  );
}
