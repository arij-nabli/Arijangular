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
  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { }

 

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
      this.active = params['active'] === 'true'; 

      
      if (this.active) {
        
        this.invoice = {
          idFacture: this.id,
          montantFacture: 50,
          montantRemise: 50,
          dateFacture: '01/01/2023',
          active: true
        };
      } else {
        
        this.invoice = null;
      }
    });
  }
  retourVersMainInvoice() {
    this.router.navigate(['/invoices']);
  }

}





