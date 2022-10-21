
class ScoreItem {
    taskId: number
    points: number
    status: string
}

type ScoreMap = {
    [key: string]: ScoreItem
}

class ScoreData {
    totalScore: number
    score: ScoreMap
}

class TaskData {
    id: number
    title: string
    category: string
    desc: string
    img: string
}

class GoalData {
    id: number
    title: string
    desc: string
    url: string
    imgUrl: string
}

class ScopeData {
    id: string;
    error: any;
    score: ScoreData
    tasks: TaskData[]
    goals: GoalData[]
}

const initialSope = JSON.parse(`{
    "id": "eva",
    "error": {},
    "score": {
      "totalScore": 0,
      "2022-10-20": [
        {
          "taskId": 1,
          "points": 0,
          "status": "not started"
        },
        {
          "taskId": 2,
          "points": 0,
          "status": "not started"
        },
        {
          "taskId": 3,
          "points": 0,
          "status": "not started"
        }
      ]
    },
    "tasks": [
      {
        "id": 1,
        "title": "Read one book",
        "category": "learn",
        "desc": "Read at least one small boor or one article every day",
        "img": "https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif"
      },
      {
        "id": 2,
        "title": "Clean up toys",
        "category": "helper",
        "desc": "Keep your room clean!",
        "img": "https://media.giphy.com/media/10zsjaH4g0GgmY/giphy.gif"
      },
      {
        "id": 3,
        "title": "Do math",
        "category": "learn",
        "desc": "Do math every day",
        "img": "https://media.giphy.com/media/lvzdeWk12qjmM/giphy.gif"
      }
    ],
    "goals": [
      {
        "id": 1,
        "title": "New Lego",
        "desc": "Brand new lego technics",
        "url": "https://www.walmart.com/ip/LEGO-Technic-Jeep-Wrangler-42122-Engaging-Toy-for-Kids-Who-Love-High-Performance-Vehicles-665-Pieces/103616322?wmlspartner=wlpa&selectedSellerId=0&http://clickserve.dartsearch.net/link/click?lid=92700060762254883&ds_s_kwgid=58700006715445296&ds_s_inventory_feed_id=97700000003583668&ds_a_cid=654818135&ds_a_caid=13956209185&ds_a_agid=126452889113&ds_a_lid=pla-1392082700544&ds_a_cid=116919406&ds_a_caid=361575031&ds_a_agid=1200667322826314&ds_a_fiid=&ds_a_lid=pla-4578641339573147&&ds_e_adid=&ds_e_matchtype=search&ds_e_device=c&ds_e_network=s&ds_e_product_group_id=4578641339573147&ds_e_product_id=103616322_0&ds_e_product_merchant_id=27449&ds_e_product_country=US&ds_e_product_language=EN&ds_e_product_channel=Online&ds_e_product_store_id=&ds_url_v=2&ds_dest_url=?adid=2222222242031946843&wmlspartner=wmtlabs&wl0=e&wl1=s&wl2=c&wl3=&wl4=pla-4578641339573147&wl5=&wl6=&wl7=&wl8=%7baceid%7d&wl9=&wl10=27449&wl11=Online&wl12=103616322_0&wl13=&veh=sem_LIA&msclkid=ec5644793f8614eb434427288cf05343&gclid=ec5644793f8614eb434427288cf05343&gclsrc=3p.ds",
        "imgUrl": "https://i5.walmartimages.com/asr/e695b066-b0c9-4d4b-9f04-9560de0681c1.89a66ca3dccccaeb2a82be496430d0d4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
      }
    ]
  }`);

export const useScope = () => useState<ScopeData>('scope', () => initialSope)
export const useColor = () => useState<string>('color', () => 'pink')
export const useTitle = () => useState<string>('title', () => '')