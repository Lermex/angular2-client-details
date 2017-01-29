import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Clients } from '../services/clients.service';

@Component({
  selector: 'home',
  providers: [
    Clients
  ],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public clients = [];
  public filteredClients = [];
  public selectedClient;

  private _searchQuery;

  constructor(
    public clientsService: Clients
  ) {}

  public get searchQuery() {
    return this._searchQuery;
  }

  public set searchQuery(newSearchQuery) {
    this._searchQuery = newSearchQuery;
    this.updateFilteredClients();
  }

  public ngOnInit() {
    this.clientsService.getData().subscribe((data) => {
      this.clients = data;
      this.updateFilteredClients();
    });
  }

  public clientClicked(client) {
    this.selectedClient = client;
  }

  private updateFilteredClients() {
    if (!this.searchQuery) {
      this.filteredClients = this.clients;
      return;
    }

    const flattenProperties = (obj) => Object.keys(obj)
      .filter((key) => key !== 'avatar')
      .map((key) => obj[key])
      .map((prop) => typeof prop === 'object' ? flattenProperties(prop) : prop);

    const fullPropertySearch = (client) => flattenProperties(client)
      .find((prop) => String(prop).toLowerCase().includes(this.searchQuery.toLowerCase()));

    this.filteredClients = this.clients.filter(fullPropertySearch);
  }
}
