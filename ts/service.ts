
import { ReactiveController, ReactiveControllerHost } from "lit";
import PouchDB  from 'pouchdb';

/*
 * Sync data with an external CouchDB instance
 *
 */
export class MoodController implements ReactiveController {
  host: ReactiveControllerHost;
  db: PouchDB;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
    this.db = new PouchDB('local.mood-db');
  }

  sync(remote: string) {
    return this.db.sync(remote, {
      live: true,
      retry: true
    });
  }

  async registerMood (event: CustomEvent) {
    console.log('registering mood event');
    this.db.put(event.detail)
  }
  async registerEnergy (event: CustomEvent) {
    console.log('registering energy event');
    this.db.put(event.detail)
  }
}
