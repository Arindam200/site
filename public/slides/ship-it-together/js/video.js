// Embeds the YouTube video when data-yt-id is set on #yt-video.
(() => {
  const el = document.getElementById("yt-video");
  const id = el && el.dataset.ytId;
  if (!id) return;
  const f = document.createElement("iframe");
  f.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
  f.title = "Gemma hackathon video";
  f.allow = "accelerometer; encrypted-media; picture-in-picture; fullscreen";
  f.allowFullscreen = true;
  f.referrerPolicy = "strict-origin-when-cross-origin";
  el.appendChild(f);
  const link = document.getElementById("yt-link");
  if (link) link.textContent = `youtu.be/${id}`;
})();
