document.getElementById("btnPostar").addEventListener("click", function () {
            const form = document.getElementById("formularioPost");
            form.style.display = (form.style.display === "none") ? "block" : "none";
        });

        function postar() {
            const content = document.getElementById("postContent").value;
            const form = document.getElementById("formularioPost");

            if (content.trim() === "") return;

            const postDiv = document.createElement("div");
            postDiv.className = "post";
            
            postDiv.innerHTML = `
                <div class="post-header">
                    <img src="imgs/default-profile.jpg" class="profile-pic">
                    <div class="user-info">
                        <span class="username">Você</span>
                        <span class="user-handle">@usuario</span>
                    </div>
                </div>
                <div class="post-content">
                    <p class="post-text">${content}</p>
                    <div class="post-actions">
                        <button class="action-btn"><i class="far fa-comment"></i> <span>0</span></button>
                        <button class="action-btn"><i class="fas fa-retweet"></i> <span>0</span></button>
                        <button class="action-btn"><i class="far fa-heart"></i> <span>0</span></button>
                        <button class="action-btn"><i class="fas fa-share"></i></button>
                    </div>
                </div>
            `;

            const feed = document.getElementById("postagens");
            feed.prepend(postDiv);

            document.getElementById("postContent").value = "";
            form.style.display = "none";
        }