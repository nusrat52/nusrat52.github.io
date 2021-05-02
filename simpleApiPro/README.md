# JFD 💻

## Task 🎯

## Memories 📝

Bir memories app'i yaratmalisiniz.
1. Umumi olarag seyfe achilanda movcun olan cardlari ekranda gostermelisiniz! Onun uchun bu api'dan istifade ederek ***GET*** metodu etmelisiniz! **API** - https://card-memories.herokuapp.com/memories/cards
2. Seyfede bir button olmalidi, hansina basdigda bir modal window achilmalidi. Hemen modal window'da yerleshen inputlari doldurdugdan sonra, submit duymesini basarag ***POST*** metodunu ishe salmalisiniz. **API** - https://card-memories.herokuapp.com/memories/cards. Bu requestin body'si ashagida geyd etdiyim shekilde gonderilmelidi:
    ```javascript
   {
      name: "User name",
      surname: "User surname",
      gender: "male",
      title: "This is title of my story",
      story: "This is my story"
   }
   ```
   Note: **gender** bolmesinde usere imkan verin ki ancag *male* ve ya *female* seche bilsin. User *male* sechdiyi zaman seyfede gorunen card goy 🔵 rengde olmalidi, *female* sechdiyi zaman card qirmizi 🔴  rengde olmalidi.
   
3. Her card'in **update** ve **delete** button'i olmalidi. Her hansi bir card'in update button'na basdigda, hemen cardin melumatlarini deishmek imkani yaranmalidi (meselen yene bir modal window acha bilersiniz hemen buttona basdigda, ve yeni melimatlari daxil ederek hemen cardi update eliye bilersiniz). Eyni mentigde delete button'da olmalidi. Note: **update** ve **delete** card'in *id* gore silinmelidi. **API** - https://card-memories.herokuapp.com/memories/cards/{id}
