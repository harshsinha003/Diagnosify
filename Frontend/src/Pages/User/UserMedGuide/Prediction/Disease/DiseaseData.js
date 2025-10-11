const diseases = [
  {
    name: "Fungal Infection",
    image: "https://media.sciencephoto.com/image/m2700268/800wm/M2700268.jpg",
  },

  {
    name: "Allergy",
    image:
      "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "GERD",
    image:
      "https://www.northtexasallergy.com/wp-content/uploads/2019/12/What-Causes-Acid-Reflux-Heartburn-and-GERD-20-root-causes-to-help-you-go-beyond-symptoms-and-get-relief.jpg",
  },

  {
    name: "Chronic Cholestasis",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jaundice08.jpg/1200px-Jaundice08.jpg",
  },

  {
    name: "Drug Reaction",
    image:
      "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-53808-2_59/MediaObjects/426769_1_En_59_Fig14_HTML.jpg",
  },

  {
    name: "Peptic ulcer disease",
    image:
      "https://media.istockphoto.com/id/988351346/photo/acid-reflux-or-heartburn-the-photo-of-stomach-is-on-the-mens-body-against-gray-background-bad.jpg?s=2048x2048&w=is&k=20&c=Ydu5G0-iN4iCqELjkXvNoIzED7nOtKc_tkGA9bMzMr8=",
  },

  {
    name: "AIDS",
    image:
      "https://c8.alamy.com/comp/BG0T8A/portrait-of-an-young-man-with-aids-in-his-home-in-mumbai-india-BG0T8A.jpg",
  },

  {
    name: "Diabetes",
    image:
      "https://www.ucihealth.org/-/media/images/modules/blog/posts/2020/02/diabetes264.jpg?h=291&iar=0&w=264&hash=1F22CEC22AD4A4A0EE2B87EBC216652F",
  },

  {
    name: "Gastroenteritis",
    image:
      "https://img.freepik.com/premium-photo/portrait-teen-boy-with-stomachache-isolated-white-background-caucasian-young-teenager-with-hands-stomach-child-having-terrible-pain-stomach-diarrhea-gastroenteritis-health-problem_323015-8451.jpg",
  },

  {
    name: "Bronchial Asthma",
    image:
      "https://img.freepik.com/premium-photo/portrait-man-with-asthma-inhaler-his-hands-asthmatic-attack-concept-treatment-bronchial-asthma-cough-allergies-dyspnea_99433-3598.jpg",
  },

  {
    name: "Hypertension",
    image:
      "https://regencyhealthcare.in/wp-content/uploads/2018/06/2-1200x800.png",
  },

  {
    name: "Migraine",
    image:
      "https://imgcdn.stablediffusionweb.com/2024/2/27/1bd75f46-2f81-42ff-a917-740365977823.jpg",
  },

  { name: "Cervical spondylosis", 
    image: "https://media.istockphoto.com/id/1903672961/photo/the-man-had-neck-pain-shoulder-pain-and-cervical-spondylosis-she-used-her-hands-to-massage.jpg?s=2048x2048&w=is&k=20&c=BSDiUkhybGDPCj80TcLIqVFv4iLmjHRYy8-cI6FPVyI=" 
  },

  { name: "Paralysis (brain hemorrhage)", 
    image: "https://media.istockphoto.com/id/2187427542/photo/stroke-illustration.jpg?s=2048x2048&w=is&k=20&c=4ywOzhVXrK9GuvfSytc0fUt6Fwx5KZTcB5tEvK_0fUA=" 
  },

  { 
    name: "Jaundice", 
    image: "https://media.istockphoto.com/id/1076274330/photo/yellowish-eyes-is-sign-of-problems-with-liver-viral-infection-or-other-disease.jpg?s=2048x2048&w=is&k=20&c=a8jmlcrneg9C0OM7YK4WqJKKkROITOxFt5lTRUDGUzs=" 
  },

  { name: "Malaria", 
    image: "https://cdn.pixabay.com/photo/2015/04/12/21/29/mosquito-719613_1280.jpg" 
  },

  { name: "Chicken pox", 
    image: "https://media.istockphoto.com/id/2219610716/photo/chickenpox-rash-on-the-boys-body-the-child-has-chickenpox-red-spots-on-the-back-childhood.jpg?s=2048x2048&w=is&k=20&c=KloAzNZ49kyZcy5G6OXAw4YbBFxUrEkOqG6rSPVatYg=" 
  },

  { name: "Dengue", 
    image: "https://cdn.pixabay.com/photo/2013/11/20/12/18/mosquito-213805_1280.jpg" 
  },

  { name: "Typhoid", 
    image: "https://cdn.pixabay.com/photo/2021/03/09/06/24/woman-6080984_1280.jpg" 
  },

  { name: "Hepatitis A", 
    image: "https://media.istockphoto.com/id/889451334/photo/the-photo-of-liver-on-womans-body-against-gray-background-hepatitis-concept-with-healthcare.jpg?s=2048x2048&w=is&k=20&c=TR-pkd3cDURmbUEThDUKsYUxmmRzDiYgxEL4lB_MrYc=" 
  },

  { name: "Hepatitis B", 
    image: "https://media.istockphoto.com/id/1319017539/photo/yellow-eye-symptom-for-health-problem.jpg?s=2048x2048&w=is&k=20&c=c6YFsV-_F88SMCCJl7osjUoKg3btbKXOGyv0MiY9ZO0=" 
  },

  { name: "Hepatitis C", 
    image: "https://media.istockphoto.com/id/1044900018/photo/virus-closeup.jpg?s=2048x2048&w=is&k=20&c=njPcLleV4OLy00p1Rvxoqd55h4J26NVf2yz-6nVWfEw=" 
  },

  { name: "Hepatitis D", 
    image: "https://images.unsplash.com/photo-1579781403289-674275bc71c5?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "Hepatitis E", 
    image: "https://images.unsplash.com/photo-1706647154522-a84bb0685670?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "Alcoholic hepatitis", 
    image: "https://images.unsplash.com/photo-1584978779993-13f50e865692?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "Tuberculosis", 
    image: "https://plus.unsplash.com/premium_photo-1745378835073-07d1c1d446d2?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "Common Cold", 
    image: "https://plus.unsplash.com/premium_photo-1723618828220-49a2af355310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tbW9uJTIwQ29sZCUyMGRpc2Vhc2UlMjBzeW1wdG9tc3xlbnwwfHwwfHx8MA%3D%3D" 
  },

  { name: "Pneumonia", 
    image: "https://images.unsplash.com/photo-1646158021158-a62028251ae8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "Dimorphic hemorrhoids (piles)", 
    image: "https://media.istockphoto.com/id/1174167173/photo/a-man-in-a-white-shirt-holds-on-to-the-anus-the-concept-of-pain-in-the-rectum-hemorrhoids.jpg?s=2048x2048&w=is&k=20&c=QMRZvcDSVU92-rKB9BWuSxB4K6_NPxEojyDc5hPvPfc=" 
  },

  { name: "Heart attack", 
    image: "https://plus.unsplash.com/premium_photo-1726863008925-d3d76eee445c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "Varicose veins", 
    image: "https://media.istockphoto.com/id/1201386909/photo/knee-pain-in-an-elderly-man.jpg?s=2048x2048&w=is&k=20&c=7iUdpvI0PKzUiI5O6bjZwgC-Gz1datcczB_4YjfSpCs=" 
  },

  { name: "Hypothyroidism", 
    image: "https://wtcs.pressbooks.pub/app/uploads/sites/47/2024/02/Goiter-1024x768.jpg" 
  },

  { name: "Hyperthyroidism", 
    image: "https://almostadoctor.co.uk/wp-content/uploads/2017/06/IMG_0780.jpeg" 
  },

  { name: "Hypoglycemia", 
    image: "https://media.post.rvohealth.io/wp-content/uploads/2023/10/Caregiver-doing-regular-check-up-of-senior-woman-thumbnail-732x549.jpg" 
  },

  { name: "Osteoarthritis", 
    image: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/PGH/C0130934-Osteoarthritis_cdp-2014041010332720.png" 
  },

  { name: "Arthritis", 
    image: "https://images.unsplash.com/photo-1693821193140-7db5779d47ed?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { name: "(Vertigo) Paroxysmal Positional Vertigo", 
    image: "https://regionalneurological.com/wp-content/uploads/2020/01/Regional-Neuro_Vertigo.jpeg" 
  },

  { name: "Acne", 
    image: "https://mdsearchlight.com/wp-content/uploads/2024/07/17101-1722003395116.jpg" 
  },

  { name: "Urinary tract infection", 
    image: "https://media.istockphoto.com/id/2211746899/photo/woman-suffering-from-abdominal-pain-at-home.jpg?s=2048x2048&w=is&k=20&c=6DckJgYCICH_SNfe8XyFvKEyDLEyf0X-jxgtbvHWO30=" 
  },

  { name: "Psoriasis", 
    image: "https://cdn.ymaws.com/www.aocd.org/resource/resmgr/ddb_high/psoriasis_2_high.jpg" 
  },

  {
    name: "Impetigo",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/01/baby-with-impetigo-rash-face-thumbnail-732x549.jpg",
  },
];

export default diseases;
