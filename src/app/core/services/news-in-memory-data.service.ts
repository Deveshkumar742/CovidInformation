import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from '../../shared/interfaces/INews';

@Injectable({
  providedIn: 'root'
})

export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {

    /** Default User data collection. */
    const newsList: INews[] = [{
      "title": "Coronavirus effect: Global buyers turn to India for textiles, ceramics and homeware",
      "description": "In the past 10 days or so, Indian manufacturers and exporters of such goods have received an increasing number of enquiries — mostly from the US and the European Union — seeking to replace China as a supplier.",
      "summary": "NEW DELHI: Global buyers are turning to India to source ceramics, homeware, fashion and lifestyle goods, textiles, engineering goods and furniture from the country as China grapples with the deadly coronavirus outbreak.",
      "fullNews": "In the past 10 days or so, Indian manufacturers and exporters of such goods have received an increasing number of enquiries — mostly from the US and the European Union — seeking to replace China as a supplier. We have received around 50 new accounts in the past seven days who were earlier sourcing their products from China but now want to source homeware, fashion and lifestyle goods, textiles and furniture from India,” said Rakesh Kumar, director general, Export Promotion Council for Handicrafts."
    }, {
      "title": "Coronavirus effect: Global buyers turn to India for textiles, ceramics and homeware",
      "description": "In the past 10 days or so, Indian manufacturers and exporters of such goods have received an increasing number of enquiries — mostly from the US and the European Union — seeking to replace China as a supplier.",
      "summary": "NEW DELHI: Global buyers are turning to India to source ceramics, homeware, fashion and lifestyle goods, textiles, engineering goods and furniture from the country as China grapples with the deadly coronavirus outbreak.",
      "fullNews": "In the past 10 days or so, Indian manufacturers and exporters of such goods have received an increasing number of enquiries — mostly from the US and the European Union — seeking to replace China as a supplier. We have received around 50 new accounts in the past seven days who were earlier sourcing their products from China but now want to source homeware, fashion and lifestyle goods, textiles and furniture from India,” said Rakesh Kumar, director general, Export Promotion Council for Handicrafts."
    }];

    return {newsList};
  }

}
