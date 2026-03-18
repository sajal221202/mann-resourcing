import { AnimatedSection } from '@/components/animated-section';

export function TermsAndConditionsPage() {
  return (
    <AnimatedSection className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <h1 className="h2 mb-10 text-center md:mb-16">Terms & Conditions</h1>
        <div className="space-y-8 text-foreground">
          
          <div>
            <h2 className="h3 mb-3">Company Role</h2>
            <p>
              MANN RESOURCING INDUSTRIES acts as a sourcing and export facilitator connecting buyers with Indian
              manufacturers.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Product Specifications</h2>
            <p>
              Products are supplied as per approved samples or specifications shared before order confirmation.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Pricing</h2>
            <p>
              Prices are subject to change based on raw material cost, currency fluctuation, and logistics
              changes until order confirmation.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Payment Terms</h2>
            <p>
              Example structure:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>50 percent advance</li>
              <li>Balance before dispatch or against shipping documents</li>
            </ul>
            <p className="mt-2">You can change this later depending on client trust level.</p>
          </div>

          <div>
            <h2 className="h3 mb-3">Order Confirmation</h2>
            <p>
              Orders are confirmed only after advance payment is received.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Production Delays</h2>
            <p>
              Delivery timelines are estimates. Delays due to manufacturing issues, logistics, customs, or
              force majeure are not considered breach of contract.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Cancellation Policy</h2>
            <p>
              Advance payments are non-refundable once production has started.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Quality Variation</h2>
            <p>
              Minor variations in color, finish, or packaging may occur due to handmade or natural
              materials.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Limitation of Liability</h2>
            <p>
              Company liability is limited to the invoice value of goods supplied.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">Governing Law</h2>
            <p>
              All disputes are subject to Indian jurisdiction.
            </p>
          </div>

          <div className="pt-8">
            <h2 className="h2-large mb-6">Export-Specific Conditions</h2>
            
            <div>
              <h3 className="h3 mb-3">Incoterms</h3>
              <p>
                Clearly mention which Incoterms you use:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>EXW</li>
                <li>FOB</li>
                <li>CIF</li>
                <li>DDP (only if you actually handle it)</li>
              </ul>
              <p className="mt-2">
                Example: “Unless otherwise agreed, shipments are executed on FOB Indian Port basis.”
              </p>
            </div>

            <div className="mt-6">
              <h3 className="h3 mb-3">Documentation Provided</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Commercial Invoice</li>
                <li>Packing List</li>
                <li>Bill of Lading / Airway Bill</li>
                <li>Certificate of Origin (if required)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="h3 mb-3">Compliance</h3>
              <p>
                Buyer must ensure product compliance with destination country regulations.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="h3 mb-3">Inspection</h3>
              <p>
                Third-party inspection can be arranged at buyer’s cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}


