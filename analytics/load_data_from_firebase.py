# coding: utf-8
import json
import firebase_admin
from firebase_admin import firestore


cred = credentials.Certificate('sarcopenia-servey-app-firebase-adminsdk-v6u4u-fc756593a5.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
rec_ref = db.collection('records')

records = []
for r in rec_ref.stream():
    records.append(r.to_dict())

len(records)
_ = map(lambda x: x.pop('lastUpdate'), records)

# DateTimeWithNanoSeconds is not serializable, needs to be converted to
# an isoformat

for r in records:
    r['recordDate'] = r['recordDate'].isoformat()

with open('20210511-records.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)
