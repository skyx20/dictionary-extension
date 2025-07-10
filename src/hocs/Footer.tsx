function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <div className="font-serif italic items-center flex justify-between h-8 p-1.5 bg-secondary">
      <p className="flex gap-1">
        All rights reserved
        <p className="italic">@{currentYear}</p>
      </p>
      <p>
        Made with
        <span className="not-italic">❤️</span>
        by
        <span className="font-sans pl-1">skyx20</span>
      </p>
    </div>
  );
}

export default Footer;
