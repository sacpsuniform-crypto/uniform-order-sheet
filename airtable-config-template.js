/**
 * 📊 AIRTABLE CONFIGURATION TEMPLATE
 * 
 * Copy this configuration and paste it into your index.html file
 * Replace the placeholder values with your actual Airtable credentials
 */

const AIRTABLE_CONFIG = {
  // Your Airtable Personal Access Token
  // Get it from: https://airtable.com/account
  // Required permissions: data.records:write
  apiKey: 'patXXXXXXXXXXXXXXXX',
  
  // Your Airtable Base ID
  // Find it at: https://airtable.com/api (select your base)
  // Format: appXXXXXXXXXXXXXX
  baseId: 'appXXXXXXXXXXXXXX',
  
  // Your Airtable Table Name
  // This must match the exact name in your Airtable base (case-sensitive)
  tableName: 'Orders'
};

/**
 * FIELDS REQUIRED IN YOUR AIRTABLE TABLE:
 * 
 * For Single Order Per Record (default method):
 * ============================================
 * 1. Timestamp          - Date (include time)
 * 2. Admin Number       - Single line text
 * 3. Learner Name       - Single line text
 * 4. Grade              - Single line text
 * 5. Parent Name        - Single line text
 * 6. Contact Number     - Phone number
 * 7. Email              - Email
 * 8. Order Items        - Long text (stores JSON)
 * 9. Order Total        - Currency (ZAR)
 * 10. Order Count       - Number
 * 11. Status            - Single select (Pending, Processing, Completed)
 * 12. Paid              - Checkbox
 * 
 * 
 * For Individual Items Per Record (alternative method):
 * ===================================================
 * 1. Timestamp          - Date (include time)
 * 2. Admin Number       - Single line text
 * 3. Learner Name       - Single line text
 * 4. Grade              - Single line text
 * 5. Parent Name        - Single line text
 * 6. Contact Number     - Phone number
 * 7. Email              - Email
 * 8. Item Name          - Single line text
 * 9. Item Size          - Single line text
 * 10. Item Quantity     - Number
 * 11. Item Price        - Currency (ZAR)
 * 12. Line Total        - Currency (ZAR)
 * 13. Status            - Single select (Pending, Processing, Completed)
 * 14. Paid              - Checkbox
 * 15. Item Number       - Number
 */

/**
 * HOW TO USE:
 * 
 * 1. Create your Airtable base and table with the fields above
 * 2. Get your API Key from https://airtable.com/account
 * 3. Get your Base ID from https://airtable.com/api
 * 4. Replace the placeholder values above with your actual values
 * 5. Copy the AIRTABLE_CONFIG object into index.html (around line 17)
 * 6. Save and test!
 */

