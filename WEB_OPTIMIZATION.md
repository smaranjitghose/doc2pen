# Optimizing Doc2Pen

For Optimizing Doc2pen we have always followed some key rules for better SEO and Performace of the website

<center><img src="https://media1.tenor.com/images/bc2f4c507d70d7eba5aa03f90484358a/tenor.gif?itemid=10968259" alt="SEO"/></center>

## SEO

<center><img src="https://i.pinimg.com/originals/56/fa/d4/56fad42e3f9d4d6e6b50950767929603.gif" alt="SEO"/></center>

- We use [React helmet](https://www.npmjs.com/package/react-helmet) for adding `meta data` on each and every page.

  - The `MetaComponent` is a component that can be imported from [MetaComponent.js](./src/seo/MetaComponent.js). As `props` we pass meta data that are imported from [metaData.js](./src/seo/metaData.js).
  - See how we used `MetaComponent` for meta-data in our [Home](./src/pages/Home/index.js) page.

  ```javascript
  <MetaComponent
  	title={metaData.home.title}
  	description={metaData.home.description}
  	keywords={metaData.home.keywords}
  />
  ```

- Always try to give a fixed height to elements that take time to download and display. This will promote lower [CLS](https://gtmetrix.com/cumulative-layout-shift.html).

## Performance

<center><img src="https://i.imgur.com/VpHytZS.gif" alt="SEO"/></center>

There are some Guidelines for better performance that you must follow while contributing code to doc2pen.

1. Always **resize the image's dimensions** to match its container's dimension. For instance, for a 300x400 image-container, use a image with width 300px. This will reduce image size that needs to be downloaded.

   - **Pro Tip**: Use Chrome DevTools to lookup the dimension of the image container.
   - use `srcset` in `<img/>` to easily automate the use of responsive images for different screen-sizes/viewports. Refer [this GTmetrix blog](https://gtmetrix.com/blog/how-to-properly-size-images/) for detailed information about `srcset`

2. **Add a caching policy** for "new" files types that are dowloaded on client-side.

   - Refer [netlify.toml](./netlify.toml) to see how to add headers to add a caching policy called Cache TTL that tells the browser to store a resource for a certain period of time
   - We have defined headers for a Cache TTL of 1 year for **every** file-types.

3. **Use next-Gen image formats:** Convert all your images (.png, .jpg, .jpeg, etc..) to webp image format. An image converted to webp have a minimum of 27% reduction in its size with no quality loss at all.

   - **Pro Tip:** Use Svgs wherever possible.
   - **Important** Dont convert images to svg using some converter. This is a meaningless thing to do.

4. When adding functionalities that involves a lot of back and forth API calls, consider establishing an early connection so that the data could be fetched quickly. Refer [this GTmetrix blog](https://gtmetrix.com/preconnect-to-required-origins.html) for detailed information about using `preconnect` attribute that helps us to achieve this behaviour.
   - **Important**: you can use a maximum of 2 preconnect for good performance gains. Refer that GTmetrix blog's "Use preconnect wisely" section.
