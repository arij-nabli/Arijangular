import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Invoice } from '../Models/Invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id: number | null = null;
  active: boolean | null = null;
  invoice: Invoice | null = null;
  invoiceList = [
    { id: 1, montantFacture: 120, montantRemise: 10, dateFacture: '12/12/2021', active: true },
    { id: 2, montantFacture: 1020, montantRemise: 90, dateFacture: '22/11/2020', active: true },
    { id: 3, montantFacture: 260, montantRemise: 30, dateFacture: '18/10/2020', active: false },
    { id: 4, montantFacture: 450, montantRemise: 40, dateFacture: '14/12/2020', active: true }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { }

 getInvoiceById(id: number): any {
    // Recherchez la facture dans la liste par ID
    return this.invoiceList.find(invoice => invoice.id === id);
  }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
      this.active = params['active'] === 'true'; 

      
     if (this.active) {
        this.invoice = this.getInvoiceById(this.id);
      } else {
        
        this.invoice = null;
      }
    });
  }
  retourVersMainInvoice() {
    this.router.navigate(['/invoices']);
  }

}





